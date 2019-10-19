using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Payment
{
    public class Bill_Detail_Model
    {
        public int Id { get; set; }
        public int? IdBill { get; set; }
        public int? IdService { get; set; }
        public int? Quantity { get; set; }
        public decimal? Price { get; set; }
    }
}
