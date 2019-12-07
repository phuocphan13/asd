using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class CategoriesOfFilm
    {
        public int Id { get; set; }
        public int? FilmOnlineId { get; set; }
        public int? FilmCategoryId { get; set; }
    }
}
