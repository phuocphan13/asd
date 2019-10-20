using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Core.UoW;
using Avaya.Domain.Models;
using Avaya.Domain.UoW;
using Avaya.Model.BookingSeat;
using Avaya.Model.SaveSeat;
using Avaya.Model.ShowSeat;

namespace Avaya.Service.SaveSeatService
{
    public class SaveSeatService : ISaveSeatService
    {
        private readonly IRepository<Booking> _bookingRepository;
        private readonly IRepository<Room> _roomRepository;
        private readonly IRepository<RoomDetail> _roomDetailRepository;
        private readonly IUnitOfWork _unitOfWork;

        public SaveSeatService(IRepository<Booking> bookingRepository,
            IRepository<Room> roomRepository,
            IRepository<RoomDetail> roomDetailRepository, IUnitOfWork unitOfWork)
        {
            _bookingRepository = bookingRepository;
            _roomDetailRepository = roomDetailRepository;
            _roomRepository = roomRepository;
            _unitOfWork = unitOfWork;
        }

        public bool SaveSeat(List<SaveSeatModel> saveSeatModel)
        {
            //    var roomDetail = _roomDetailRepository.GetAll().ToList();
            //    var booking = _bookingRepository.GetAll().ToList();

            //    foreach (var seat in roomDetail)
            //    {
            //        foreach (var reservedSeat in saveSeatModel)
            //        {
            //            if (reservedSeat.GUID.Contains(seat.Guid.ToString()))
            //            {
            //                foreach (var booked in booking)
            //                {
            //                    if (booked.IdShowTime == reservedSeat.ShowTime && booked.IdRoomDetail == seat.Id)
            //                    {
            //                        return false;
            //                    }
            //                    else
            //                    {
            //                        var insertSeat = AutoMapper.Mapper.Map<Booking>(seat);
            //                        insertSeat.Id = 0;
            //                        insertSeat.IdRoomDetail = seat.Id;
            //                        insertSeat.IdShowTime = reservedSeat.ShowTime;
            //                        _bookingRepository.Insert(insertSeat);
            //                        _unitOfWork.SaveChanges();
            //                    }
            //                }
            //            }
            //        }
            //    }

            return true;
        }


        public bool BookingSeat(BookingSeatModel seatBooking)
        {
            var listSeatGuids = seatBooking.ListReverseSeats.Select(x => x.Guid);
            var listSeats = _roomDetailRepository.GetAll().Where(x => listSeatGuids.Any(i => i == x.Guid.ToString()));
            var room = _roomRepository.FirstOrDefault(x => x.IdShowTime == seatBooking.IdShowTime);

            var listBookings = new List<Booking>();

            foreach (var item in seatBooking.ListReverseSeats)
            {
                var booking = new Booking();
                booking.IdRoom = room.Id;
                booking.IdShowTime = seatBooking.IdShowTime;
                booking.IdSeatType = item.IdSeatType;

                var seat = listSeats.FirstOrDefault(x => x.Guid == Guid.Parse(item.Guid));

                booking.IdRoomDetail = seat.Id;

                listBookings.Add(booking);
            }

            _bookingRepository.Insert(listBookings);


            return _unitOfWork.SaveChanges();
        }
    }
}
