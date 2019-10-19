using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Service
{
    public class PaymentModel: BaseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
