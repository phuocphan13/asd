using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Avaya.Service.CinemaService
{
    public class CinemaService : ICinemaService
    {
        private readonly IRepository<BookingDetail> _bookingdetailRepository;
        private readonly IRepository<Cinema> _cinemaDetailsRepository;

        public CinemaService(IRepository<BookingDetail> bookingdetailRepository,
            IRepository<Cinema> movieRepository)
        {
            _bookingdetailRepository = bookingdetailRepository;
            _cinemaDetailsRepository = movieRepository;
        }

        public List<Cinema> GetAll()
        {
            var abc = _cinemaDetailsRepository.GetAll().Include(x => x.BookingDetail).ToList();
            return _cinemaDetailsRepository.GetAll().Include(x => x.BookingDetail).ToList();
        }

        //public List<Cinema> GetAll(int date, Movie movie);
        //{
             
        //}
    }
}
