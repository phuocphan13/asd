using Avaya.Model.Payment;
using Avaya.Model.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.PaymentService
{
    public interface IPaymentService
    {
         List<PaymentModel> GetListPayment(List<SearchServiceModel> searchPayment);
         List<PaymentModel> GetAll();
        List<PaymentModel> GetListBill(List<BillDetailModel> billPayment);
        bool Create(BillDetailModel insertBillModel);
    }
}
