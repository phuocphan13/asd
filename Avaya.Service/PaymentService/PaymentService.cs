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
        private readonly IUnitOfWork _unitOfWork;

        public PaymentService(IRepository<Product> productRepository,
            IRepository<Booking> bookingRepository,
            IRepository<RoomDetail> roomDetailRepository,
            IRepository<Room> roomRepository,
            IUnitOfWork unitOfWork,
            IRepository<BillDetail> billDetailRepository,
            IRepository<Bill> billRepository)
        {
            _bookingRepository = bookingRepository;
            _roomDetailRepository = roomDetailRepository;
            _roomRepository = roomRepository;
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
            var listSeatGuids = bill.ListSeats.Select(x => x.Guid);

            var listSeats = _roomDetailRepository.GetAll()
                .Where(x => listSeatGuids.Any(i => i == x.Guid.ToString())).ToList();
            var room = _roomRepository.FirstOrDefault(x => x.IdShowTime == bill.IdShowTime);

            var billEntity = bill.MapTo<Bill>();
            var billDetailEntities = bill.ListBillDetails.MapTo<List<BillDetail>>();

            billEntity.BillDetail = billDetailEntities;

            var listBookings = new List<Booking>();

            foreach (var item in bill.ListSeats)
            {
                var booking = new Booking();
                booking.IdRoom = room.Id;
                booking.IdShowTime = bill.IdShowTime;
                booking.IdSeatType = item.IdSeatType;

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
