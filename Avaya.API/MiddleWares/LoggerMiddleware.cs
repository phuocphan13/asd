using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Avaya.API.MiddleWares
{
    public class LoggerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;
        const string MessageTemplate = "HTTP {RequestMethod} {RequestPath} responded {StatusCode} {ContentType} in {Elapsed:0.0000} ms";
        public LoggerMiddleware(RequestDelegate next, ILoggerFactory loggerFactory)
        {
            _next = next;
            _logger = loggerFactory.CreateLogger<LoggerMiddleware>();
        }
        public async Task Invoke(HttpContext context)
        {
            using (_logger.BeginScope(this))
            {
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();
                try
                {
                    await _next(context);
                }
                catch (Exception ex)
                {
                    StringBuilder builder = new StringBuilder();
                    builder.AppendLine(ex.Message);

                    Exception innerException = ex.InnerException;
                    while (innerException != null)
                    {
                        builder.AppendLine(innerException.Message);
                        innerException = innerException.InnerException;
                    }
                    _logger.LogError(builder.ToString());
                    _logger.LogError(ex.StackTrace);
                }
                stopwatch.Stop();
                if (context.Response.StatusCode > 499)
                {
                    _logger.LogError(MessageTemplate, context.Request.Method, context.Request.Path,
                  context.Response.StatusCode,
                  context.Response.ContentType,
                  stopwatch.ElapsedMilliseconds);
                }
                else
                {
                    _logger.LogInformation(MessageTemplate, context.Request.Method, context.Request.Path,
                    context.Response.StatusCode,
                    context.Response.ContentType,
                    stopwatch.ElapsedMilliseconds);
                }
            }
        }
    }
    public static class LoggerMiddlewareExtension
    {
        public static IApplicationBuilder UseLoggerMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<LoggerMiddleware>();
        }
    }
}
