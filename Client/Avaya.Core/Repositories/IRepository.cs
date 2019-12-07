using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Avaya.Core.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        #region Select/Get/Query

        /// <summary>
        ///     Used to get a IQueryable that is used to retrieve entities from entire table.
        /// </summary>
        /// <returns>IQueryable to be used to select entities from database</returns>
        IQueryable<TEntity> GetAll();

        /// <summary>
        ///     Used to get all entities.
        /// </summary>
        /// <returns>List of all entities</returns>
        List<TEntity> GetAllList();

        /// <summary>
        ///     Used to get all entities.
        /// </summary>
        /// <returns>List of all entities</returns>
        Task<List<TEntity>> GetAllListAsync();

        /// <summary>
        ///     Used to get all entities based on given <paramref name="predicate" />.
        /// </summary>
        /// <param name="predicate">A condition to filter entities</param>
        /// <returns>List of all entities</returns>
        List<TEntity> GetAllList(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        ///     Used to get all entities based on given <paramref name="predicate" />.
        /// </summary>
        /// <param name="predicate">A condition to filter entities</param>
        /// <returns>List of all entities</returns>
        Task<List<TEntity>> GetAllListAsync(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        ///     Queries the specified predicate.
        /// </summary>
        /// <param name="predicate">The predicate.</param>
        /// <returns></returns>
        IQueryable<TEntity> Query(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        ///     Gets an entity with given primary key.
        /// </summary>
        /// <param name="id">Primary key of the entity to get</param>
        /// <returns>Entity</returns>
        TEntity Get(object id);

        /// <summary>
        ///     Gets an entity with given primary key.
        /// </summary>
        /// <param name="id">Primary key of the entity to get</param>
        /// <returns>Entity</returns>
        Task<TEntity> GetAsync(object id);

        /// <summary>
        ///     Gets exactly one entity with given predicate.
        ///     Throws exception if no entity or more than one entity.
        /// </summary>
        /// <param name="predicate">Entity</param>
        TEntity Single(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        ///     Gets exactly one entity with given predicate.
        ///     Throws exception if no entity or more than one entity.
        /// </summary>
        /// <param name="predicate">Entity</param>
        Task<TEntity> SingleAsync(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        ///     Gets an entity with given primary key or null if not found.
        /// </summary>
        /// <param name="id">Primary key of the entity to get</param>
        /// <returns>Entity or null</returns>
        TEntity FirstOrDefault(object id);

        /// <summary>
        ///     Gets an entity with given primary key or null if not found.
        /// </summary>
        /// <param name="id">Primary key of the entity to get</param>
        /// <returns>Entity or null</returns>
        Task<TEntity> FirstOrDefaultAsync(object id);

        /// <summary>
        ///     Gets an entity with given given predicate or null if not found.
        /// </summary>
        /// <param name="predicate">Predicate to filter entities</param>
        TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        ///     Gets an entity with given given predicate or null if not found.
        /// </summary>
        /// <param name="predicate">Predicate to filter entities</param>
        Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate);

        #endregion

        #region Insert

        /// <summary>
        ///     Inserts a new entity.
        /// </summary>
        /// <param name="entity">Inserted entity</param>
        void Insert(TEntity entity);

        /// <summary>
        ///     Inserts a new entity.
        /// </summary>
        /// <param name="entity">Inserted entity</param>
        Task InsertAsync(TEntity entity);

        /// <summary>
        ///     Inserts a new entity.
        /// </summary>
        /// <param name="entities">Inserted entities</param>
        void Insert(IEnumerable<TEntity> entities);

        /// <summary>
        ///     Inserts a new entity.
        /// </summary>
        /// <param name="entities">Inserted entity</param>
        Task InsertAsync(IEnumerable<TEntity> entities);

       
        #endregion

        #region Update

        /// <summary>
        ///     Updates an existing entity.
        /// </summary>
        /// <param name="entity">Entity</param>
        void Update(TEntity entity);

        /// <summary>
        ///     Updates an existing list entity.
        /// </summary>
        /// <param name="entities">Entities</param>
        void Update(IEnumerable<TEntity> entities);

        #endregion

        #region Delete

        /// <summary>
        ///     Deletes an entity.
        /// </summary>
        /// <param name="entity">Entity to be deleted</param>
        void Delete(TEntity entity, bool forceDelete = false);

        /// <summary>
        ///     Deletes an entity by primary key.
        /// </summary>
        /// <param name="id">Primary key of the entity</param>
        void DeleteById(object id, bool forceDelete = false);

        /// <summary>
        ///     Deletes all entity
        /// </summary>
        /// <param name="listEntity">list entity</param>
        void Delete(IEnumerable<TEntity> listEntity, bool forceDelete = false);

        /// <summary>
        ///     Deletes many entities by function.
        ///     Notice that: All entities fits to given predicate are retrieved and deleted.
        ///     This may cause major performance problems if there are too many entities with
        ///     given predicate.
        /// </summary>
        /// <param name="predicate">A condition to filter entities</param>
        void Delete(Expression<Func<TEntity, bool>> predicate, bool forceDelete = false);

        /// <summary>
        ///     Used to get a IQueryable that is used to retrieve entities from entire table and not filtered by Organization.
        /// </summary>
        /// <returns>IQueryable to be used to select entities from database</returns>
        IQueryable<TEntity> GetAllDataOrganizations();
        #endregion

        #region Aggregates

        /// <summary>
        ///     Gets count of all entities in this repository.
        /// </summary>
        /// <returns>Count of entities</returns>
        int Count();

        /// <summary>
        ///     Gets count of all entities in this repository.
        /// </summary>
        /// <returns>Count of entities</returns>
        Task<int> CountAsync();

        /// <summary>
        ///     Gets count of all entities in this repository based on given <paramref name="predicate" />.
        /// </summary>
        /// <param name="predicate">A method to filter count</param>
        /// <returns>Count of entities</returns>
        int Count(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        ///     Gets count of all entities in this repository based on given <paramref name="predicate" />.
        /// </summary>
        /// <param name="predicate">A method to filter count</param>
        /// <returns>Count of entities</returns>
        Task<int> CountAsync(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        ///     Gets count of all entities in this repository (use if expected return value is greather than
        ///     <see cref="int.MaxValue" />.
        /// </summary>
        /// <returns>Count of entities</returns>
        long LongCount();

        /// <summary>
        ///     Gets count of all entities in this repository (use if expected return value is greather than
        ///     <see cref="int.MaxValue" />.
        /// </summary>
        /// <returns>Count of entities</returns>
        Task<long> LongCountAsync();

        /// <summary>
        ///     Gets count of all entities in this repository based on given <paramref name="predicate" />
        ///     (use this overload if expected return value is greather than <see cref="int.MaxValue" />).
        /// </summary>
        /// <param name="predicate">A method to filter count</param>
        /// <returns>Count of entities</returns>
        long LongCount(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        ///     Gets count of all entities in this repository based on given <paramref name="predicate" />
        ///     (use this overload if expected return value is greather than <see cref="int.MaxValue" />).
        /// </summary>
        /// <param name="predicate">A method to filter count</param>
        /// <returns>Count of entities</returns>
        Task<long> LongCountAsync(Expression<Func<TEntity, bool>> predicate);

        #endregion
    }
}
