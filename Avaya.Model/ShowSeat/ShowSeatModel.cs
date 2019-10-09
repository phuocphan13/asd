using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.ShowSeat
{
    public class ShowSeatModel : BaseModel
    {
        public string Row { get; set; }
        public string Column { get; set; }
        public int Seat { get; set; }
        public string Type { get; set; }
        public string color { get; set; }

        
    }
}
