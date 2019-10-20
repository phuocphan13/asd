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
using Avaya.Model.SaveSeat;

namespace Avaya.Service.SaveSeatService
{
    public class SaveSeatService : ISaveSeatService
    {
        private readonly IRepository<Booking> _bookingRepository;
        private readonly IRepository<RoomDetail> _roomDetailRepository;
        private readonly IUnitOfWork _unitOfWork;

        public SaveSeatService(IRepository<Booking> bookingRepository
            , IRepository<RoomDetail> roomDetailRepository, IUnitOfWork unitOfWork)
        {
            _bookingRepository = bookingRepository;
            _roomDetailRepository = roomDetailRepository;
            _unitOfWork = unitOfWork;
        }

        public bool SaveSeat(List<SaveSeatModel> saveSeatModel)
        {
            var roomDetail = _roomDetailRepository.GetAll().ToList();
            var booking = _bookingRepository.GetAll().ToList();

            foreach(var seat in roomDetail)
            {
                foreach(var reservedSeat in saveSeatModel)
                {
                    if (reservedSeat.GUID.Contains(seat.Guid.ToString()))
                    {
                        var insertSeat = AutoMapper.Mapper.Map<Booking>(seat);

                        foreach (var booked in booking)
                        {
                            if (booked.IdShowTime != insertSeat.IdShowTime && booked.IdRoomDetail != insertSeat.IdRoomDetail)
                            {
                                insertSeat.IdRoomDetail = seat.Id;
                                insertSeat.IdShowTime = reservedSeat.ShowTime;
                                _bookingRepository.Insert(insertSeat);
                                _unitOfWork.SaveChanges();
                            }
                            else return false;
                        }
                    }
                }
            }

            return true;
        }
    }
}
