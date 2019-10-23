using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class SeatType
    {
        public SeatType()
        {
            RoomDetail = new HashSet<RoomDetail>();
        }

        public int Id { get; set; }
        public string Type { get; set; }

        public virtual ICollection<RoomDetail> RoomDetail { get; set; }
    }
}
