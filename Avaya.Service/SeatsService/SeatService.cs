using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model.Seat;

namespace Avaya.Service.SeatService
{
    public class SeatService : ISeatService
    {
        private readonly IRepository<Booking> _bookingRepository;
        private readonly IRepository<RoomDetail> _roomDetailRepository;
        private readonly IRepository<Room> _roomRepository;
        private readonly IRepository<RoomShowTime> _roomShowTimeRepository;
        private readonly IRepository<Product> _productRepository;

        public SeatService(IRepository<Booking> bookingRepository,
            IRepository<RoomDetail> roomDetailRepository,
            IRepository<Room> roomRepository,
            IRepository<RoomShowTime> roomShowTimeRepository,
            IRepository<Product> productRepository)
        {
            _bookingRepository = bookingRepository;
            _roomDetailRepository = roomDetailRepository;
            _roomRepository = roomRepository;
            _roomShowTimeRepository = roomShowTimeRepository;
            _productRepository = productRepository;
        }

        public List<ShowSeatModel> GetShowSeat(SearchSeatModel searchSeat)
        {

            if (searchSeat.ShowTime != 0 && searchSeat.ShowTime > 0)
            {
                var listSeats = new List<ShowSeatModel>();

                var roomShowTime = _roomShowTimeRepository.FirstOrDefault(x => x.IdShowTime == searchSeat.ShowTime);
                if (roomShowTime == null)
                    return null;

                var room = _roomRepository.FirstOrDefault(x => x.Id == roomShowTime.IdRoom);
                if (room == null)
                    return null;

                var roomDetail = _roomDetailRepository.GetAll().Where(x => x.IdRoom == room.Id).ToList();
                if (roomDetail == null)
                    return null;

                listSeats = Mapper.Map<List<RoomDetail>, List<ShowSeatModel>>(roomDetail);
                if (listSeats == null)
                    return null;

                var listReservedSeats = _bookingRepository.GetAll()
                    .Where(x => x.IdShowTime == searchSeat.ShowTime).ToList();

                var listProductId = roomDetail.Select(x => x.IdProduct).ToList();

                var listProducs = _productRepository.GetAll().Where(x => listProductId.Any(i => i == x.Id));


                foreach (var item in listSeats)
                {
                    var product = listProducs.FirstOrDefault(x => x.Id == item.IdProduct);
                    var isBooked = listReservedSeats.Any(x => x.IdRoomDetail == item.Id);
                    item.Type = product.Name;
                    item.IdSeatType = product.Id;
                    item.IsBooking = isBooked;
                }
                return listSeats;
            }

            return null;

        }
    }
}
