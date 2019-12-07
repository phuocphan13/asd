using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Cinema
    {
        public Cinema()
        {
            BookingDetail = new HashSet<BookingDetail>();
            ProductCinema = new HashSet<ProductCinema>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Logo { get; set; }

        public virtual ICollection<BookingDetail> BookingDetail { get; set; }
        public virtual ICollection<ProductCinema> ProductCinema { get; set; }
    }
}
