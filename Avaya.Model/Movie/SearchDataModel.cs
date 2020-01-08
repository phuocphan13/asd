using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Movie
{
    public class SearchDataModel
    {
        public SearchDataModel()
        {
            ListMovie = new List<SearchBoxMovieModel>();
            ListCinema = new List<SearchBoxCinemaModel>();
        }
        public List<SearchBoxMovieModel> ListMovie { get; set; }
        public List<SearchBoxCinemaModel> ListCinema { get; set; }
    }
}
