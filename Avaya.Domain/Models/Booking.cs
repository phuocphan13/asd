using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Booking
    {
        public int Id { get; set; }
        public int IdShowTime { get; set; }
        public int? IdRoomDetail { get; set; }

        public virtual RoomDetail IdRoomDetailNavigation { get; set; }
    }
}
