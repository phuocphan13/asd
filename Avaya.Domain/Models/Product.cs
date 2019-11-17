using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Product
    {
        public Product()
        {
            ProductCinema = new HashSet<ProductCinema>();
            RoomDetail = new HashSet<RoomDetail>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? Type { get; set; }

        public virtual ICollection<ProductCinema> ProductCinema { get; set; }
        public virtual ICollection<RoomDetail> RoomDetail { get; set; }
    }
}
