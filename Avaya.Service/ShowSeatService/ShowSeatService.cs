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

        public ShowSeatModel GetShowSeat(SearchSeatModel searchSeat)
        {
            if (searchSeat.ShowTime != 0)
            {
                var showSeat = new ShowSeatModel();

                var room = _roomRepository.FirstOrDefault(x => x.IdShowTime == searchSeat.ShowTime);
                if (room == null)
                    return null;

                var roomDetail = _roomDetailRepository.GetAll().Where(x => x.IdRoom == room.Id).ToList();
                showSeat.Seat = Mapper.Map<List<RoomDetail>, List<SeatModel>>(roomDetail);

                if (showSeat.Seat == null)
                    return null;

                foreach (var item in showSeat.Seat)
                {
                    var seatType = _seatTypeRepository.FirstOrDefault(x => x.Id == item.IdSeatType);
                    item.Type = seatType.Type;
                }

                showSeat.ReservedSeat = _bookingSeatRepository.GetAll().
                    Where(x => x.IdRoom == room.Id).MapTo<List<ReservedSeatModel>>();
                if (showSeat.ReservedSeat == null)
                    return null;

                return showSeat;
            }
            return null;

        }
    }
}
