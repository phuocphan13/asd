using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class FilmOnline
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ImgUrl { get; set; }
        public int? Duration { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string Type { get; set; }
    }
}
