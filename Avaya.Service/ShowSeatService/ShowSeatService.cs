using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model.ShowSeat;

namespace Avaya.Service.ShowSeatService
{
    public class ShowSeatService : IShowSeatService
    {
        private readonly IRepository<Booking> _bookingSeatRepository;
        private readonly IRepository<RoomDetail> _roomDetailRepository;
        private readonly IRepository<Room> _roomRepository;
        private readonly IRepository<ShowTime> _showTimeRepository;
        private readonly IRepository<SeatType> _seatTypeRepository;

        public ShowSeatService(IRepository<Booking> bookingSeatRepository,
            IRepository<RoomDetail> roomDetailRepository,
            IRepository<Room> roomRepository,
            IRepository<ShowTime> showTimeRepository,
            IRepository<SeatType> seatTypeRepository)
        {
            _bookingSeatRepository = bookingSeatRepository;
            _roomDetailRepository = roomDetailRepository;
            _roomRepository = roomRepository;
            _showTimeRepository = showTimeRepository;
            _seatTypeRepository = seatTypeRepository;
        }

        public List<ShowSeatModel> GetShowSeat(SearchSeatModel searchSeat)
        {

            if (searchSeat.ShowTime != 0)
            {
                var listSeats = new List<ShowSeatModel>();

                var room = _roomRepository.FirstOrDefault(x => x.IdShowTime == searchSeat.ShowTime);
                if (room == null)
                    return null;

                var roomDetail = _roomDetailRepository.GetAll().Where(x => x.IdRoom == room.Id).ToList();
                if (roomDetail == null)
                    return null;

                listSeats = Mapper.Map<List<RoomDetail>, List<ShowSeatModel>>(roomDetail);
                if (listSeats == null)
                    return null;

                var listReservedSeats = _bookingSeatRepository.GetAll()
                    .Where(x => x.IdRoom == room.Id && x.IdShowTime == searchSeat.ShowTime);

                var listSeatTypeId = roomDetail.Select(x => x.IdSeatType).ToList();

                var listSeatTypes = _seatTypeRepository.GetAll().Where(x => listSeatTypeId.Any(i => i == x.Id)).ToList();

                foreach (var item in listSeats)
                {
                    var seatType = listSeatTypes.FirstOrDefault(x => x.Id == item.IdSeatType);
                    var isBooked = listReservedSeats.Any(x => x.IdRoomDetail == item.Id);
                    item.Type = seatType.Type;
                    item.IsBooking = isBooked;
                }
                return listSeats;
            }

            return null;

        }
    }
}
