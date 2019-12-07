using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.FilmOnline
{
    public class FilmDetailModel : BaseModel
    {
        public string Title { get; set; }

        public string ImgUrl { get; set; }

        public string Description { get; set; }

        public string Time { get; set; }

        public string Categories { get; set; }

        public string Type { get; set; }

        public string Date { get; set; }
    }
}
