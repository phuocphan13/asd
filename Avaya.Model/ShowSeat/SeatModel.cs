using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.ShowSeat
{
    public class SeatModel :BaseModel
    {
        public int Column { get; set; }
        public int RowStart { get; set; }
        public int RowEnd { get; set; }
        public string Type { get; set; }
    }
}
