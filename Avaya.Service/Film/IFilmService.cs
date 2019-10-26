using Avaya.Model.FilmOnline;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.Film
{
    public interface IFilmService
    {
        List<FilmCarouselModel> GetListFilmsCarousel();

        FilmNominationLoadingModel GetListFilmsNomination();

        FilmNominationLoadingModel GetLoadMoreFilmNomination(int numberFilmNominationCurrent, int numberFilmNominationTake = 5);
    }
}
