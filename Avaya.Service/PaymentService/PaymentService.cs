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
                var aa = new PaymentModel();
                var abc = _serviceRepository.FirstOrDefault(x => x.Id == item.Id).MapTo<PaymentModel>();
                listpayment.Add(aa);
            }
            return listpayment;
        }
    }
}
