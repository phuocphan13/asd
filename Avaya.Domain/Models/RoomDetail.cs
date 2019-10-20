using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class RoomDetail
    {
        public int Id { get; set; }
        public int IdSeatType { get; set; }
        public int IdRoom { get; set; }
        public int Column { get; set; }
        public int RowStart { get; set; }
        public int RowEnd { get; set; }
    }
}
