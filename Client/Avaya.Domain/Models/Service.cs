using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Service
    {
        public Service()
        {
            BillDetail = new HashSet<BillDetail>();
        }

        public int Id { get; set; }
        public int IdCinema { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }

        public virtual ICollection<BillDetail> BillDetail { get; set; }
    }
}
