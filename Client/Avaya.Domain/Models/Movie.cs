using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Movie
    {
        public Movie()
        {
            BookingDetail = new HashSet<BookingDetail>();
        }

        public int Id { get; set; }
        public string Picture { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Duration { get; set; }

        public virtual ICollection<BookingDetail> BookingDetail { get; set; }
    }
}
