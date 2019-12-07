using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Core.UoW
{
    public interface IUnitOfWork
    {
        bool SaveChanges();
    }
}
