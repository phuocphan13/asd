using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.FilmOnline
{
    public class FilmOnlineModel: BaseModel
    {
        public string Title { get; set; }

        public string ImgUrl { get; set; }

        public string Time { get; set; }

        public string Type { get; set; }
    }
}
