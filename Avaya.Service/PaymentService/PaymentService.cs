using System;
using System.Collections.Generic;
using System.Linq;
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
        private readonly IRepository<Booking> _bookingRepository;
        private readonly IRepository<RoomDetail> _roomDetailRepository;
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<Bill> _billRepository;
        private readonly IRepository<ProductCinema> _productCinemaRepository;

        private readonly IUnitOfWork _unitOfWork;

        public PaymentService(IRepository<Product> productRepository,
            IRepository<Booking> bookingRepository,
            IRepository<RoomDetail> roomDetailRepository,
            IRepository<ProductCinema> productCinemaRepository,
            IRepository<Bill> billRepository,
            IUnitOfWork unitOfWork)
        {
            _bookingRepository = bookingRepository;
            _roomDetailRepository = roomDetailRepository;
            _productRepository = productRepository;
            _productCinemaRepository = productCinemaRepository;
            _billRepository = billRepository;

            _unitOfWork = unitOfWork;
        }

        public List<PaymentModel> GetListProducts(int idCinema)
        {
            var listProductCinemaEntities = _productCinemaRepository.GetAll().Where(x => x.IdCinema == idCinema).ToList();
            var listProductEntities = _productRepository.GetAll()
                    .Where(x => listProductCinemaEntities.Any(i => i.IdProduct == x.Id)).ToList();

            var listProducts = new List<PaymentModel>();

            foreach (var productCinema in listProductCinemaEntities)
            {
                var product = listProductEntities.FirstOrDefault(x => x.Id == productCinema.IdProduct);
                listProducts.Add(new PaymentModel()
                {
                    Id = productCinema.Id,
                    Name = product.Name,
                    Price = productCinema.Price.Value,
                    Type = product.Type.Value,
                    IdProduct = product.Id,
                });
            }

            return listProducts;
        }

        public bool Create(BillModel bill)
        {
            var listSeatGuids = bill.ListSeats.Select(x => x.Guid);
            if (listSeatGuids == null)
                return false;

            var listSeats = _roomDetailRepository.GetAll()
                .Where(x => listSeatGuids.Any(i => i == x.Guid.ToString())).ToList();
            if (listSeats == null)
                return false;

            var billEntity = bill.MapTo<Bill>();
            var billDetailEntities = bill.ListBillDetails.MapTo<List<BillDetail>>();

            billEntity.BillDetail = billDetailEntities;

            var listBookings = new List<Booking>();

            foreach (var item in bill.ListSeats)
            {
                var booking = new Booking();

                booking.IdShowTime = bill.IdShowTime;

                var seatId = listSeats.FirstOrDefault(x => x.Guid == Guid.Parse(item.Guid)).Id;

                booking.IdRoomDetail = seatId;

                listBookings.Add(booking);
            }

            _billRepository.Insert(billEntity);
            _bookingRepository.Insert(listBookings);

            return _unitOfWork.SaveChanges();
        }
    }
}
