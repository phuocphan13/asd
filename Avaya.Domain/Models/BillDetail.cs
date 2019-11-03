using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class BillDetail
    {
        public int Id { get; set; }
        public int? IdBill { get; set; }
        public int? IdService { get; set; }
        public int? Quantity { get; set; }
        public decimal? Price { get; set; }

        public virtual Bill IdBillNavigation { get; set; }
    }
}
