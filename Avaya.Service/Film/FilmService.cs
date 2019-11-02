using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model.FilmOnline;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Avaya.Service.Film
{
    public class FilmService : IFilmService
    {
        private readonly IRepository<FilmOnline> _filmOnlineRepository;
        private readonly IRepository<FilmCategory> _filmCategoryRepository;
        private readonly IRepository<CategoriesOfFilm> _categoryOfFilmRepository;

        public FilmService(IRepository<FilmOnline> filmOnlineRepository,
            IRepository<FilmCategory> filmCategoryRepository,
            IRepository<CategoriesOfFilm> categoryOfFilmRepository)
        {
            _filmOnlineRepository = filmOnlineRepository;
            _filmCategoryRepository = filmCategoryRepository;
            _categoryOfFilmRepository = categoryOfFilmRepository;
        }

        public List<FilmCarouselModel> GetListFilmsCarousel()
        {
            int i = 0;
            var listFilmsEntity = _filmOnlineRepository.GetAll();
            var listFilms = listFilmsEntity.MapTo<List<FilmCarouselModel>>();

            var listFilmIds = listFilmsEntity.Select(x => x.Id);

            var listCategoryOfFilmEntity = _categoryOfFilmRepository.GetAll()
                .Where(x => listFilmIds.Any(t => t == x.FilmOnlineId));

            var listCategoriesEntity = _filmCategoryRepository.GetAll()
                .Where(x => listCategoryOfFilmEntity.Any(t => t.FilmCategoryId == x.Id));

            foreach (var item in listFilms)
            {
                item.Index = i++;
                var categoryOfFilm = listCategoryOfFilmEntity.Where(x => x.FilmOnlineId == item.Id);
                var categories = listCategoriesEntity.Where(x => categoryOfFilm.Any(t => t.FilmCategoryId == x.Id));
                item.Category = string.Join(", ", categories.Select(x => x.Name));
            }
            return listFilms;
        }

        public List<FilmNominationModel> GetListFilmsNomination()
        {
            var listFilmsEntity = _filmOnlineRepository.GetAll();
            var listFilms = listFilmsEntity.MapTo<List<FilmNominationModel>>();

            return listFilms;
        }
    }
}
