using Avaya.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.MovieNews
{
    public class NewsDetailModel
    {
        public int Id { get; set; }
        public string Headline { get; set; }
        public string Description { get; set; }
        public string Text { get; set; }
        public DateTime PublishDate { get; set; }
        public string Author { get; set; }
        public string Source { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public string Tags { get; set; }
        public int? Priority { get; set; }
        public List<NewsImage> ListImage { get; set; }
    }
}
