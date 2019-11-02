using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class NewsCategories
    {
        public NewsCategories()
        {
            NewsArticleCategories = new HashSet<NewsArticleCategories>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<NewsArticleCategories> NewsArticleCategories { get; set; }
    }
}
