using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Payment
{
    public class BillModel
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public decimal Total { get; set; }
    }
}
