using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model.Service;

namespace Avaya.Service.PaymentService
{
    public class PaymentService : IPaymentService
    {
        private readonly IRepository<Avaya.Domain.Models.Service> _serviceRepository;

        public PaymentService(IRepository<Avaya.Domain.Models.Service> serviceRepository)
        {
            _serviceRepository = serviceRepository;
        }
        public List<PaymentModel> GetListPayment(List<SearchServiceModel> searchService)
        {
            var listpayment = new List<PaymentModel>();

            foreach (var item in searchService)
            {
                var list = _serviceRepository.FirstOrDefault(x => x.Id == item.Id).MapTo<PaymentModel>();
                if (list == null)
                    return null;

                list.Total = item.Quantity * list.Price;

                list.Quantity = item.Quantity;

                listpayment.Add(list);
            }

            return listpayment;
        }
    }
}
