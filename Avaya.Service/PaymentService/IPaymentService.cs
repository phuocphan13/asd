using Avaya.Model.Payment;
using Avaya.Model.Service;
using System.Collections.Generic;

namespace Avaya.Service.PaymentService
{
    public interface IPaymentService
    {
        List<PaymentModel> GetListProducts(int idCinema);

        bool Create(BillModel bill);


    }
}
