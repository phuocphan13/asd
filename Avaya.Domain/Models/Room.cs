using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Room
    {
        public Room()
        {
            Booking = new HashSet<Booking>();
        }

        public int Id { get; set; }
        public int IdShowTime { get; set; }
        public int Amount { get; set; }
        public string Name { get; set; }

        public virtual ShowTime IdShowTimeNavigation { get; set; }
        public virtual ICollection<Booking> Booking { get; set; }
    }
}
