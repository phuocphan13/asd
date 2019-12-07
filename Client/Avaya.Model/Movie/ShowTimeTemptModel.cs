using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Movie
{
    public class ShowTimeTemptModel
    {
        public ShowTimeTemptModel()
        {
            ListShowTime = new List<ShowTimeModel>();
            
        }
        public List<ShowTimeModel> ListShowTime { get; set; }
    }
}
