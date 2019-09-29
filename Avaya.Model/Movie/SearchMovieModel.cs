using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace Avaya.Model.Movie
{
    public class SearchMovieModel
    {
        [Required(ErrorMessage = "Nhập tên phim")]
        public string MovieName { get; set; }

        [Required(ErrorMessage = "Nhập rạp")]
        public string CinemaName { get; set; }

        [Required(ErrorMessage = "Chọn ngày")]
        public string Date { get; set; }
    }
}
