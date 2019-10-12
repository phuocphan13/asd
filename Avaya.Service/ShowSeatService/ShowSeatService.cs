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

        public ShowSeatModel GetListSeats(SearchSeatModel searchSeat)
        {
            if (searchSeat.ShowTime != 0)
            {
                var listseats = new ShowSeatModel();

                var room = _roomRepository.FirstOrDefault(x => x.IdShowTime == searchSeat.ShowTime);
                if (room == null)
                {
                    return null;
                }

                listseats.Seat = _roomDetailRepository.GetAll().
                    Where(x => x.IdRoom == room.Id).MapTo<List<SeatModel>>();
                if (listseats.Seat == null)
                {
                    return null;
                }

                var list = _roomDetailRepository.GetAll().
                    Where(x => x.IdRoom == room.Id).ToList();
                foreach (var item in list)
                {
                    var seattype = _seatTypeRepository.FirstOrDefault(x => x.Id == item.IdSeatType);
                    if (seattype == null)
                    {
                        return null;
                    }

                    foreach (var items in listseats.Seat)
                    {
                        items.Type = seattype.Type;
                    }
                }

                listseats.ReservedSeat = _bookingSeatRepository.GetAll().
                    Where(x => x.IdRoom == room.Id).MapTo<List<ReservedSeatModel>>();
                if (listseats.ReservedSeat == null)
                {
                    return null;
                }

                return listseats;
            }
            return null;

        }
    }
}
