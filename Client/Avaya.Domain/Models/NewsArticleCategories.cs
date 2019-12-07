using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class NewsArticleCategories
    {
        public int Id { get; set; }
        public int NewsCategoryId { get; set; }
        public int NewsArticleId { get; set; }

        public virtual NewsArticles NewsArticle { get; set; }
        public virtual NewsCategories NewsCategory { get; set; }
    }
}
