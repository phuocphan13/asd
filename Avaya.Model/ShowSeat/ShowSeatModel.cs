﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.ShowSeat
{
    public class ShowSeatModel : BaseModel
    {
        public int Column { get; set; }
        public int Row { get; set; }
        public string Type { get; set; }
        public int IdSeatType { get; set; }
        public Boolean IsBooking { get; set; }

    }
}
