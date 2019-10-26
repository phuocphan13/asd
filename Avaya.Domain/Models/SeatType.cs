using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class SeatType
    {
        public SeatType()
        {
            Booking = new HashSet<Booking>();
            RoomDetail = new HashSet<RoomDetail>();
        }

        public int Id { get; set; }
        public string Type { get; set; }

        public virtual ICollection<Booking> Booking { get; set; }
        public virtual ICollection<RoomDetail> RoomDetail { get; set; }
    }
}
