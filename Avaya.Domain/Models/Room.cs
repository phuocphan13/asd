using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Room
    {
        public Room()
        {
            RoomDetail = new HashSet<RoomDetail>();
        }

        public int Id { get; set; }
        public int IdShowTime { get; set; }
        public int Amount { get; set; }
        public string Name { get; set; }

        public virtual ShowTime IdShowTimeNavigation { get; set; }
        public virtual ICollection<RoomDetail> RoomDetail { get; set; }
    }
}
