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
        private readonly IRepository<ReservedSeat> _reservedSeatRepository;
        private readonly IRepository<RoomDetail> _roomDetailRepository;
        private readonly IRepository<Room> _roomRepository;
        private readonly IRepository<ShowTime> _showTimeRepository;
        private readonly IRepository<SeatType> _seatTypeRepository;

        public ShowSeatService(IRepository<ReservedSeat> reservedSeatRepository,
            IRepository<RoomDetail> roomDetailRepository,
            IRepository<Room> roomRepository,
            IRepository<ShowTime> showTimeRepository,
            IRepository<SeatType> seatTypeRepository)
        {
            _reservedSeatRepository = reservedSeatRepository;
            _roomDetailRepository = roomDetailRepository;
            _roomRepository = roomRepository;
            _showTimeRepository = showTimeRepository;
            _seatTypeRepository = seatTypeRepository;
        }

        public ShowSeatModel GetListSeats (SearchSeatModel searchSeat)
        {
            if (!string.IsNullOrEmpty(searchSeat.ShowTime)
                && !string.IsNullOrWhiteSpace(searchSeat.ShowTime))
            {
                var listseats = new ShowSeatModel();

                var room = _roomRepository.FirstOrDefault(x => x.IdShowTime == int.Parse(searchSeat.ShowTime));

                listseats.Seat = _roomDetailRepository.GetAll().Where(x => x.IdRoom == room.Id).MapTo<List<SeatModel>>();

                listseats.ReserveSeat = _reservedSeatRepository.GetAll()
                    .Where(x => x.IdShowTime == int.Parse(searchSeat.ShowTime)).MapTo<List<ReservedSeatModel>>();

                listseats.SeatType = _seatTypeRepository.GetAll().MapTo<List<SeatTypeModel>>();

                return listseats;
            }            
            return null;
        }
    }
}
