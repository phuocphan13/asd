using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class ShowTime
    {
        public ShowTime()
        {
            RoomShowTime = new HashSet<RoomShowTime>();
        }

        public int Id { get; set; }
        public int IdBookingDetail { get; set; }
        public TimeSpan TimeStart { get; set; }
        public TimeSpan TimeEnd { get; set; }
        public int Seat { get; set; }

        public virtual BookingDetail IdBookingDetailNavigation { get; set; }
        public virtual ICollection<RoomShowTime> RoomShowTime { get; set; }
    }
}
