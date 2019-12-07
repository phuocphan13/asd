using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class ReservedSeat
    {
        public int Id { get; set; }
        public int IdShowTime { get; set; }
        public int? Seat { get; set; }

        public virtual ShowTime IdShowTimeNavigation { get; set; }
    }
}
