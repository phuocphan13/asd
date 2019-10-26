using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class NewsArticles
    {
        public NewsArticles()
        {
            NewsArticleCategories = new HashSet<NewsArticleCategories>();
            NewsImage = new HashSet<NewsImage>();
        }

        public int Id { get; set; }
        public string HeadLine { get; set; }
        public string Description { get; set; }
        public string Text { get; set; }
        public DateTime PublishDate { get; set; }
        public string Author { get; set; }
        public string Source { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public string Tags { get; set; }
        public int? Priority { get; set; }

        public virtual ICollection<NewsArticleCategories> NewsArticleCategories { get; set; }
        public virtual ICollection<NewsImage> NewsImage { get; set; }
    }
}
