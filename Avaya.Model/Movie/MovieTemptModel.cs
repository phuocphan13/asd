using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Movie
{
    public class MovieTemptModel : BaseModel
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public int Duration { get; set; }

        public string Picture { get; set; }

        public string Address { get; set; }
    }
}
