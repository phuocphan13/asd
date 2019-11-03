using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public int IdCinema { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int? Quantity { get; set; }
        public int? Type { get; set; }
    }
}
