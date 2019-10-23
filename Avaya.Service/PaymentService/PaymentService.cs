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
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<BillDetail> _billDetailRepository;
        private readonly IRepository<Bill> _billRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PaymentService(IRepository<Product> productRepository
            , IUnitOfWork unitOfWork, IRepository<BillDetail> billDetailRepository, IRepository<Bill> billRepository)
        {
            _productRepository = productRepository;
            _unitOfWork = unitOfWork;
            _billDetailRepository = billDetailRepository;
            _billRepository = billRepository;
        }

        public List<PaymentModel> GetAll()
        {
            return _productRepository.GetAll().MapTo<List<PaymentModel>>();
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
