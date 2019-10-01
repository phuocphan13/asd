using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class NewsImage
    {
        public int Id { get; set; }
        public short? PhotoWidth { get; set; }
        public short? PhotoHeight { get; set; }
        public string PhotoUrl { get; set; }
        public int ArticlePhotoId { get; set; }

        public virtual NewsArticles ArticlePhoto { get; set; }
    }
}
