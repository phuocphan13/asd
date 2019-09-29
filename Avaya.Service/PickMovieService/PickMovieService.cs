using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;

namespace Avaya.Service.PickMovieService
{
    public class PickMovieService : IPickMovieService
    {
        private readonly IRepository<Room> _roomRepository;
        private readonly IRepository<RoomDetail> _roomdetailRepository;
        public PickMovieService(IRepository<Room> roomRepository,
            IRepository<RoomDetail> roomdetailRepository)
        {
            _roomRepository = roomRepository;
            _roomdetailRepository = roomdetailRepository;
        }
        public List<RoomDetail> GetAll()
        {
            return _roomdetailRepository.GetAll().ToList();
        }
    }
}
