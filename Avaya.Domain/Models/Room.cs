using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Room
    {
        public Room()
        {
            RoomShowTime = new HashSet<RoomShowTime>();
        }

        public int Id { get; set; }
        public int Amount { get; set; }
        public string Name { get; set; }

        public virtual ICollection<RoomShowTime> RoomShowTime { get; set; }
    }
}
