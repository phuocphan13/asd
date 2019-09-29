using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Domain.Log
{
    public static class Log4NetExtensions
    {
        public static ILoggerFactory AddLog4Net(this ILoggerFactory factory)
        {
            factory.AddProvider(CreateLog4NetProvider());

            return factory;
        }

        public static ILoggerFactory AddLog4Net(this ILoggerFactory factory, string configFileName)
        {
            factory.AddProvider(CreateLog4NetProvider(configFileName));

            return factory;
        }

        private static ILoggerProvider CreateLog4NetProvider(string configFileName = "")
        {
            var fileName = string.IsNullOrEmpty(configFileName) ? "log4net.config" : configFileName;

            return new Log4NetProvider(fileName);
        }
    }
}
