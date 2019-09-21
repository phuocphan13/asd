using Avaya.Core.UoW;
using Avaya.Domain.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Domain.UoW
{
    public class UnitOfWork : UnitOfWorkBase<MovieTheaterContext>
    {
        public UnitOfWork(MovieTheaterContext gmcContext, ILogger<UnitOfWork> logger) : base(gmcContext, logger)
        {
        }
    }
}
