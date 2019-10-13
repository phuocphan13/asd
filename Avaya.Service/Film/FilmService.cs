using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model.FilmOnline;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.Film
{
    public class FilmService : IFilmService
    {
        private readonly IRepository<FilmOnline> _filmOnlineRepository;
        private readonly IRepository<FilmCategory> _filmCategoryRepository;

        public FilmService(IRepository<FilmOnline> filmOnlineRepository, 
            IRepository<FilmCategory> filmCategoryRepository)
        {
            _filmOnlineRepository = filmOnlineRepository;
            _filmCategoryRepository = filmCategoryRepository;
        }

        public List<FilmOnlineModel> GetAll()
        {
            var listFilms = _filmOnlineRepository.GetAll().MapTo<List<FilmOnlineModel>>();
            return listFilms;
        }
    }
}
