using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Core.UoW
{
    public class UnitOfWorkBase<TContext> : IUnitOfWork where TContext : DbContext
    {
        private readonly TContext _gmcContext;
        private readonly ILogger _logger;

        public UnitOfWorkBase(TContext gmcContext, ILogger<UnitOfWorkBase<TContext>> logger)
        {
            _gmcContext = gmcContext;
        }

        public bool SaveChanges()
        {
            try
            {
                return _gmcContext.SaveChanges() > 0;
            }
            catch (DbUpdateConcurrencyException e)
            {
                _logger.LogError("Some errors happen while committing", e);
                throw;
                //throw new AppException(e.Message, e);
            }
        }
    }
}
