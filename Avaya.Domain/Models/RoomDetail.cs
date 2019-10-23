using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class RoomDetail
    {
        public int Id { get; set; }
        public int IdRoom { get; set; }
        public int IdSeatType { get; set; }
        public string Row { get; set; }
        public string Column { get; set; }

        public virtual Room IdRoomNavigation { get; set; }
        public virtual SeatType IdSeatTypeNavigation { get; set; }
    }
}
