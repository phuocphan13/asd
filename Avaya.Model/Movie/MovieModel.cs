using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Movie
{
    public class MovieModel : BaseModel
    {
        public MovieModel()
        {
            ShowTime = new List<ShowTimeModel>();
        }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Duration { get; set; }

        public string Picture { get; set; }

        public string Address { get; set; }

        public List<ShowTimeModel> ShowTime { get; set; }
    }
}
