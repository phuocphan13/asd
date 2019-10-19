using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Payment
{
    public class BillDetailModel
    {        
        public int UserId { get; set; }
        public int serviceId { get; set; }
        public int quantity { get; set; }
        public decimal price { get; set; }
        public int IdUser { get; set; }
        public decimal Total { get; set; }
    }
}
