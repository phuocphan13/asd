using Avaya.Domain.Models;
using Avaya.Model.Movie;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.MovieService
{
    public interface IMovieService
    {
        List<Movie> GetAll();

        MovieModel GetListMovies(SearchMovieModel searchMovie);

        SearchDataModel GetListData();
    }
}
