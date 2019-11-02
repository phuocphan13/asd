using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.FilmOnline
{
    public class FilmCarouselModel: BaseModel
    {
        public string Title { get; set; }

        public string ImgUrl { get; set; }

        public string Time { get; set; }

        public string Type { get; set; }

        public int Index { get; set; }

        public string Category { get; set; }
    }
}
