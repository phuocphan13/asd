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
            , IUnitOfWork unitOfWork, IRepository<BillDetail> billDetailRepository, IRepository<Bill> billRepository)
        {
            _serviceRepository = serviceRepository;
            _unitOfWork = unitOfWork;
            _billDetailRepository = billDetailRepository;
            _billRepository = billRepository;
        }

        public List<PaymentModel> GetAll()
        {
            return _serviceRepository.GetAll().MapTo<List<PaymentModel>>();
        }

        public bool Create(BillModel bill)
        {
            var billEntity = bill.MapTo<Bill>();
            var billDetailEntities = bill.ListBillDetails.MapTo<List<BillDetail>>();

            billEntity.BillDetail = billDetailEntities;
            _billRepository.Insert(billEntity);

            return _unitOfWork.SaveChanges();
        }


    }
}
