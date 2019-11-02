using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Bill
    {
        public Bill()
        {
            BillDetail = new HashSet<BillDetail>();
        }

        public int Id { get; set; }
        public int IdUser { get; set; }
        public decimal Total { get; set; }

        public virtual ICollection<BillDetail> BillDetail { get; set; }
    }
}
