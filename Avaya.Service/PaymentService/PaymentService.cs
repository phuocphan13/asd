using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Core.UoW;
using Avaya.Domain.Models;
using Avaya.Model.Payment;
using Avaya.Model.Service;

namespace Avaya.Service.PaymentService
{
    public class PaymentService : IPaymentService
    {
        private readonly IRepository<Avaya.Domain.Models.Service> _serviceRepository;
        private readonly IRepository<BillDetail> _billDetailRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PaymentService(IRepository<Avaya.Domain.Models.Service> serviceRepository,IUnitOfWork unitOfWork, IRepository<BillDetail> billDetailRepository)
        {
            _serviceRepository = serviceRepository;
            _unitOfWork = unitOfWork;
            _billDetailRepository = billDetailRepository;
        }
        public List<PaymentModel> GetListPayment(List<SearchServiceModel> searchService)
        {
            var listpayment = new List<PaymentModel>();

            foreach (var item in searchService)
            {
                var list = _serviceRepository.FirstOrDefault(x => x.Id == item.Id).MapTo<PaymentModel>();
                if (list == null)
                    return null;

                //list.Total = item.Quantity * list.Price;

                list.Quantity = item.Quantity;

                listpayment.Add(list);
            }

            return listpayment;
        }

        public List<PaymentModel> GetAll()
        {
            return _serviceRepository.GetAll().MapTo<List<PaymentModel>>();
        }
        public List<PaymentModel> GetListBill(List<BillDetailModel> billPayment)
        {
            return null ;
        }

        public bool Create(BillDetailModel insertBillModel)
        {
            var insert = AutoMapper.Mapper.Map<BillDetail>(insertBillModel);
            _billDetailRepository.Insert(insert);
            return _unitOfWork.SaveChanges();
        }

        
    }
}
