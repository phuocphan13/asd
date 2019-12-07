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

        public FilmNominationLoadingModel GetListFilmsNomination()
        {
            var filmNomination = new FilmNominationLoadingModel();

            var listFilmsEntity = _filmOnlineRepository.GetAll().Take(7);
            var numberNominationFilmMaximum = _filmOnlineRepository.Count();

            var listFilms = listFilmsEntity.MapTo<List<FilmNominationModel>>();
            filmNomination.ListFilmNominations = listFilms;
            filmNomination.NumberFilmNominationCurrent = 7;
            filmNomination.IsLoadMore = numberNominationFilmMaximum > 7;

            return filmNomination;
        }

        public FilmNominationLoadingModel GetLoadMoreFilmNomination(
            int numberFilmNominationCurrent, int numberFilmNominationTake = 7)
        {
            var filmNomination = new FilmNominationLoadingModel();
            var numberNominationFilmMaximum = _filmOnlineRepository.Count();

            var listFilmsEntity = _filmOnlineRepository.GetAll().Skip(numberFilmNominationCurrent)
                .Take(numberFilmNominationTake).ToList();

            var listFilms = listFilmsEntity.MapTo<List<FilmNominationModel>>();

            filmNomination.ListFilmNominations = listFilms;

            if (numberNominationFilmMaximum == numberFilmNominationCurrent + listFilms.Count)
            {
                filmNomination.IsLoadMore = false;
                filmNomination.NumberFilmNominationCurrent = numberNominationFilmMaximum;
            }
            else
            {
                filmNomination.IsLoadMore = true;
                filmNomination.NumberFilmNominationCurrent = numberFilmNominationCurrent + numberFilmNominationTake;
            }

            return filmNomination;
        }

        public FilmDetailModel GetFilmDetail(int filmId)
        {
            var filmDetail = new FilmDetailModel();

            var filmDetailEntity = _filmOnlineRepository.FirstOrDefault(x => x.Id == filmId);
            var listCategoryIdEntities = _categoryOfFilmRepository.GetAll()
                .Where(x => x.FilmOnlineId == filmId);
            var listCategoryNameEntities = _filmCategoryRepository.GetAll()
                .Where(x => listCategoryIdEntities.Any(i => i.FilmCategoryId == x.Id)).Select(x => x.Name).ToArray();

            filmDetail = filmDetailEntity.MapTo<FilmDetailModel>();
            filmDetail.Categories = string.Join(", ", listCategoryNameEntities);
            filmDetail.Date = filmDetailEntity.ReleaseDate.Value.ToString("dd MMMM yyyy");

            return filmDetail;
        }

        public List<FilmDetailModel> GetListFilmDetails(int filmId, int numberOfFilms)
        {
            var listFilmDetails = new List<FilmDetailModel>();
            var listFilmDetailEntities = _filmOnlineRepository.GetAll()
                .Where(x => x.Id != filmId).Take(numberOfFilms).ToList();
            var listCategoryOfFilms = _categoryOfFilmRepository.GetAll()
                .Where(x => listFilmDetailEntities.Any(i => i.Id == x.FilmOnlineId));
            var listCategoryEntities = _filmCategoryRepository.GetAll()
                .Where(x => listCategoryOfFilms.Any(i => i.FilmCategoryId == x.Id)).ToList();

            foreach (var item in listFilmDetailEntities)
            {
                var filmDetail = new FilmDetailModel();
                filmDetail = item.MapTo<FilmDetailModel>();

                var categoryNames = listCategoryEntities
                    .Where(x => listCategoryOfFilms
                    .Any(i => i.FilmOnlineId == item.Id))
                    .Select(x => x.Name);

                filmDetail.Categories = string.Join(", ", categoryNames);
                filmDetail.Date = item.ReleaseDate.Value.ToString("dd MMMM yyyy");

                listFilmDetails.Add(filmDetail);
            }

            return listFilmDetails;
        }
    }
}
