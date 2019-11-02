using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Payment
{
    public class BillModel : BaseModel
    {
        public int UserId { get; set; }
        public decimal Total { get; set; }
        public List<BillDetailModel> ListBillDetails { get; set; }

        public BillModel()
        {
            ListBillDetails = new List<BillDetailModel>();
        }
    }
}
