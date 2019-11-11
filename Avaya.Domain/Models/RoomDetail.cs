using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class RoomDetail
    {
        public int Id { get; set; }
        public int IdRoom { get; set; }
        public int Column { get; set; }
        public int? Row { get; set; }
        public Guid Guid { get; set; }
        public int? IdProduct { get; set; }

        public virtual Room IdSeatTypeNavigation { get; set; }
        public virtual Product IdProductNavigation { get; set; }
        public virtual ICollection<Booking> Booking { get; set; }
    }
}
