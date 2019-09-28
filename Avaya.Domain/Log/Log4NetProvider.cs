using log4net;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Avaya.Domain.Log
{
    public class Log4NetProvider : ILoggerProvider
    {
        private readonly string _configFileName = string.Empty;
        private readonly ConcurrentDictionary<string, ILogger> _loggers = new ConcurrentDictionary<string, ILogger>();
        public Log4NetProvider(string configFileName)
        {
            _configFileName = configFileName;
        }

        public ILogger CreateLogger(string categoryName)
        {
            return _loggers.GetOrAdd(categoryName, CreateLoggerImplementation);
        }

        public void Dispose()
        {
            _loggers.Clear();
        }

        protected ILogger CreateLoggerImplementation(string categoryName)
        {
            try
            {
                var repository = LogManager.GetRepository(Assembly.GetEntryAssembly());

                if (LogManager.GetCurrentLoggers(repository.Name).Count() == 0)
                {
                    log4net.Config.XmlConfigurator.Configure(repository, new FileInfo(_configFileName));
                }

                var logger = LogManager.GetLogger(repository.Name, categoryName);
                return new Log4NetLogger(logger);
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
            return null;

        }
    }
}
