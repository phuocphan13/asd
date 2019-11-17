using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Core.UoW;
using Avaya.Domain.Models;
using Avaya.Model.BookingSeat;
using Avaya.Model.Payment;
using Avaya.Model.Service;

namespace Avaya.Service.PaymentService
{
    public class PaymentService : IPaymentService
    {
        private readonly IRepository<Booking> _bookingRepository;
        private readonly IRepository<RoomDetail> _roomDetailRepository;
        private readonly IRepository<Room> _roomRepository;
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<BillDetail> _billDetailRepository;
        private readonly IRepository<Bill> _billRepository;
        private readonly IRepository<ProductCinema> _productCinemaRepository;
        private readonly IRepository<RoomShowTime> _roomShowTimeRepository;

        private readonly IUnitOfWork _unitOfWork;

        public PaymentService(IRepository<Product> productRepository,
            IRepository<Booking> bookingRepository,
            IRepository<RoomDetail> roomDetailRepository,
            IRepository<Room> roomRepository,
            IRepository<ProductCinema> productCinemaRepository,
            IRepository<BillDetail> billDetailRepository,
            IRepository<Bill> billRepository,
            IRepository<RoomShowTime> roomShowTimeRepository,
            IUnitOfWork unitOfWork)
        {
            _bookingRepository = bookingRepository;
            _roomDetailRepository = roomDetailRepository;
            _roomRepository = roomRepository;
            _productRepository = productRepository;
            _billDetailRepository = billDetailRepository;
            _productCinemaRepository = productCinemaRepository;
            _billRepository = billRepository;
            _roomShowTimeRepository = roomShowTimeRepository;

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

            var listSeats = _roomDetailRepository.GetAll()
                .Where(x => listSeatGuids.Any(i => i == x.Guid.ToString())).ToList();






            var room = _roomRepository.FirstOrDefault(x => x.Id == bill.IdRoom);







            var billEntity = bill.MapTo<Bill>();
            var billDetailEntities = bill.ListBillDetails.MapTo<List<BillDetail>>();

            billEntity.BillDetail = billDetailEntities;

            var listBookings = new List<Booking>();

            foreach (var item in bill.ListSeats)
            {
                var booking = new Booking();
                booking.IdShowTime = bill.IdShowTime;

                //booking.IdRoom = room.Id;
                //booking.IdShowTime = bill.IdShowTime;
                //booking.IdSeatType = item.IdSeatType;

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
