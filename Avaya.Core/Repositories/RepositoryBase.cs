using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Avaya.Core.Repositories
{
    public class RepositoryBase<TEntity, TContext> : IRepository<TEntity>
        where TEntity : class where TContext : DbContext
    {
        protected readonly TContext Context;
        protected readonly int CurrentUserId;
        protected readonly DbSet<TEntity> Entities;

        public RepositoryBase(TContext context)
        {
            Context = context;
            Entities = context.Set<TEntity>();
        }

        public virtual IQueryable<TEntity> GetAll()
        {
            return Entities.AsNoTracking();
        }

        public virtual List<TEntity> GetAllList()
        {
            return GetAll().ToList();
        }

        public virtual async Task<List<TEntity>> GetAllListAsync()
        {
            return await GetAll().ToListAsync();
        }

        public virtual List<TEntity> GetAllList(Expression<Func<TEntity, bool>> predicate)
        {
            return GetAll().Where(predicate).ToList();
        }

        public virtual async Task<List<TEntity>> GetAllListAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await GetAll().Where(predicate).ToListAsync();
        }

        public virtual IQueryable<TEntity> Query(Expression<Func<TEntity, bool>> predicate)
        {
            return GetAll().Where(predicate);
        }

        public virtual TEntity Get(object id)
        {
            return Entities.Find(id);
        }

        public virtual async Task<TEntity> GetAsync(object id)
        {
            return await Entities.FindAsync(id);
        }

        public virtual TEntity Single(Expression<Func<TEntity, bool>> predicate)
        {
            return Entities.SingleOrDefault(predicate);
        }

        public virtual Task<TEntity> SingleAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return Entities.SingleOrDefaultAsync(predicate);
        }

        public virtual TEntity FirstOrDefault(object id)
        {
            return Entities.FirstOrDefault(CreateEqualityExpressionForId(id));
        }

        public virtual Task<TEntity> FirstOrDefaultAsync(object id)
        {
            return Task.FromResult(FirstOrDefault(id));
        }

        public virtual TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate)
        {
            return Entities.FirstOrDefault(predicate);
        }

        public virtual Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return Task.FromResult(FirstOrDefault(predicate));
        }

        public virtual void Insert(TEntity entity)
        {
            Entities.Add(entity);
        }

        public virtual async Task InsertAsync(TEntity entity)
        {
            await Entities.AddAsync(entity);
        }

        public virtual void Insert(IEnumerable<TEntity> entities)
        {
            Entities.AddRange(entities);
        }

        public virtual async Task InsertAsync(IEnumerable<TEntity> entities)
        {
            await Entities.AddRangeAsync(entities);
        }


        public virtual void Update(TEntity entity)
        {
            Entities.Update(entity);
        }

        public virtual void Update(IEnumerable<TEntity> entities)
        {
            Entities.UpdateRange(entities);
        }

        public virtual void Delete(TEntity entity, bool forceDelete = false)
        {
            if (forceDelete)
                Entities.Remove(entity);
            else
                Update(entity);
        }

        public virtual void DeleteById(object id, bool forceDelete = false)
        {
            var entity = Entities.Find(id);
            if (forceDelete)
                Entities.Remove(entity);
            else
                Update(entity);
        }

        public virtual void Delete(IEnumerable<TEntity> listEntity, bool forceDelete = false)
        {
            foreach (var entity in listEntity)
                Delete(entity, forceDelete);
        }

        public virtual void Delete(Expression<Func<TEntity, bool>> predicate, bool forceDelete = false)
        {
            var listEntity = GetAll().Where(predicate).ToList();
            foreach (var entity in listEntity)
                Delete(entity, forceDelete);
        }

        public virtual int Count()
        {
            return GetAll().Count();
        }

        public virtual Task<int> CountAsync()
        {
            return Task.FromResult(Count());
        }

        public virtual int Count(Expression<Func<TEntity, bool>> predicate)
        {
            return GetAll().Where(predicate).Count();
        }

        public virtual Task<int> CountAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return Task.FromResult(Count(predicate));
        }

        public virtual long LongCount()
        {
            return GetAll().LongCount();
        }

        public virtual Task<long> LongCountAsync()
        {
            return Task.FromResult(LongCount());
        }

        public virtual long LongCount(Expression<Func<TEntity, bool>> predicate)
        {
            return GetAll().Where(predicate).LongCount();
        }

        public virtual Task<long> LongCountAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return Task.FromResult(LongCount(predicate));
        }

        protected static Expression<Func<TEntity, bool>> CreateEqualityExpressionForId(object id)
        {
            var lambdaParam = Expression.Parameter(typeof(TEntity));

            var lambdaBody = Expression.Equal(
                Expression.PropertyOrField(lambdaParam, "Id"),
                Expression.Constant(id, typeof(object))
            );

            return Expression.Lambda<Func<TEntity, bool>>(lambdaBody, lambdaParam);
        }

        public virtual IQueryable<TEntity> GetAllDataOrganizations()
        {
            return Entities.AsNoTracking();
        }
    }
}
