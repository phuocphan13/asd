using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class ProductCinema
    {
        public int Id { get; set; }
        public int? IdCinema { get; set; }
        public int? IdProduct { get; set; }
        public decimal? Price { get; set; }

        public virtual Cinema IdCinemaNavigation { get; set; }
        public virtual Product IdProductNavigation { get; set; }
    }
}
