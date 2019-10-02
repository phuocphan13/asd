using Avaya.Model.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.PaymentService
{
    public interface IPaymentService
    {
         List<PaymentModel> GetListPayment(List<SearchServiceModel> searchPayment);
    }
}
