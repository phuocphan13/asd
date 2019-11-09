using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class SeatType
    {
        public SeatType()
        {
            Booking = new HashSet<Booking>();
        }

        public int Id { get; set; }
        public string Type { get; set; }

        public virtual ICollection<Booking> Booking { get; set; }
    }
}
