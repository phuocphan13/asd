using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Payment
{
    public class BillDetailModel
    {
        public int ServiceId { get; set; }

        public int Quantity { get; set; }

        public decimal Price { get; set; }
    }
}
