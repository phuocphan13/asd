using Avaya.Model.Payment;
using Avaya.Model.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.PaymentService
{
    public interface IPaymentService
    {
        List<PaymentModel> GetAll();

        bool Create(BillModel bill);
    }
}
