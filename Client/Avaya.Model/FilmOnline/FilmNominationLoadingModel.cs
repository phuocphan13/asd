using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.FilmOnline
{
    public class FilmNominationLoadingModel
    {
        public FilmNominationLoadingModel()
        {
            ListFilmNominations = new List<FilmNominationModel>();
        }

        public int NumberFilmNominationCurrent { get; set; }

        public int NumberFilmNominationMaximum { get; set; }

        public bool IsLoadMore { get; set; }

        public List<FilmNominationModel> ListFilmNominations;
    }
}
