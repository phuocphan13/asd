using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Domain.Repositories
{
    public class Repository<TEntity> : RepositoryBase<TEntity, MovieTheaterContext>
        where TEntity : class
    {
        public Repository(MovieTheaterContext context) : base(context)
        {
        }
    }
}
