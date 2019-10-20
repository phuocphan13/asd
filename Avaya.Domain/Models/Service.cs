using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Service
    {
        public int Id { get; set; }
        public int IdCinema { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
