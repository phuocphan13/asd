using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class RoomShowTime
    {
        public int Id { get; set; }
        public int? IdRoom { get; set; }
        public int? IdShowTime { get; set; }

        public virtual Room IdRoomNavigation { get; set; }
        public virtual ShowTime IdShowTimeNavigation { get; set; }
    }
}
