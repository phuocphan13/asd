using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Booking
    {
        public int Id { get; set; }
        public int IdRoom { get; set; }
        public int IdShowTime { get; set; }
        public int IdSeatType { get; set; }
        public int Row { get; set; }
        public int Column { get; set; }
    }
}
