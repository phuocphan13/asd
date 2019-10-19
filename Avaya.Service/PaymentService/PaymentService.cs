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
        private readonly IRepository<Bill> _billRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PaymentService(IRepository<Avaya.Domain.Models.Service> serviceRepository
            ,IUnitOfWork unitOfWork, IRepository<BillDetail> billDetailRepository, IRepository<Bill> billRepository)
        {
            _serviceRepository = serviceRepository;
            _unitOfWork = unitOfWork;
            _billDetailRepository = billDetailRepository;
            _billRepository = billRepository;
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
            var insert = AutoMapper.Mapper.Map<Bill>(insertBillModel);
            _billRepository.Insert(insert);
            _unitOfWork.SaveChanges();

            var bill = _billRepository.GetAll().ToList();
            if (bill == null)
                return false;
            else foreach(var item in bill)
                {
                    if(item.IdUser == insertBillModel.UserId)
                    {
                        var insertBillDetal = AutoMapper.Mapper.Map<BillDetail>(insertBillModel);
                        insertBillDetal.IdBill = item.Id;
                        _billDetailRepository.Insert(insertBillDetal);
                        _unitOfWork.SaveChanges();
                    }
                }

            return true;
        }

        
    }
}
