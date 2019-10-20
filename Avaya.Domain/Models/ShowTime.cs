using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class ShowTime
    {
        public ShowTime()
        {
            ReservedSeat = new HashSet<ReservedSeat>();
            Room = new HashSet<Room>();
        }

        public int Id { get; set; }
        public int IdBookingDetail { get; set; }
        public TimeSpan TimeStart { get; set; }
        public TimeSpan TimeEnd { get; set; }
        public int Seat { get; set; }

        public virtual BookingDetail IdBookingDetailNavigation { get; set; }
        public virtual ICollection<ReservedSeat> ReservedSeat { get; set; }
        public virtual ICollection<Room> Room { get; set; }
    }
}
