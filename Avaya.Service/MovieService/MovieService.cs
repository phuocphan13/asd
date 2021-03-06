﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model.Movie;

namespace Avaya.Service.MovieService
{
    public class MovieService : IMovieService
    {
        private readonly IRepository<BookingDetail> _bookingDetailRepository;
        private readonly IRepository<Movie> _movieRepository;
        private readonly IRepository<Cinema> _cinemaRepository;
        private readonly IRepository<ShowTime> _showTimeRepository;

        public MovieService(IRepository<BookingDetail> bookingDetailRepository,
            IRepository<Movie> movieRepository, IRepository<Cinema> cinemaRepository, IRepository<ShowTime> showTimeRepository)
        {
            _bookingDetailRepository = bookingDetailRepository;
            _movieRepository = movieRepository;
            _cinemaRepository = cinemaRepository;
            _showTimeRepository = showTimeRepository;
        }
        public List<Movie> GetAll()
        {
            return _movieRepository.GetAll().ToList();
        }

        public List<Movie> GetData(string query)
        {
            var list = _movieRepository.GetAll().Where(x => x.Name.Contains(query)).MapTo<List<Movie>>().ToList();
            return list;
        }


        public MovieModel GetListMovies(SearchMovieModel searchMovie)
        {
            if (searchMovie.MovieId != 0
                && searchMovie.CinemaId != 0
                && !string.IsNullOrEmpty(searchMovie.Date)
                && searchMovie.MovieId != 0
                && searchMovie.CinemaId != 0
                && !string.IsNullOrWhiteSpace(searchMovie.Date))
            {
                var movie = _movieRepository.FirstOrDefault(x => x.Id == searchMovie.MovieId)
                    .MapTo<MovieModel>();
                if (movie == null)
                    return null;

                var cinema = _cinemaRepository.FirstOrDefault(x => x.Id == searchMovie.CinemaId)
                    .MapTo<MovieModel>();
                if (cinema == null)
                    return null;

                var bookingDetail = _bookingDetailRepository.FirstOrDefault(x => x.IdMovie == searchMovie.MovieId
                                    && x.IdCinema == searchMovie.CinemaId
                                    && x.Date == DateTime.Parse(searchMovie.Date).Date);
                if (bookingDetail == null)
                    return null;

                var listShowTimes = _showTimeRepository.GetAll()
                    .Where(x => x.IdBookingDetail == bookingDetail.Id);

                foreach (var item in listShowTimes)
                {
                    var hourTemp = item.TimeStart.Hours;
                    var hour = hourTemp > 10 ? hourTemp.ToString() : string.Format("0{0}", hourTemp.ToString());
                    var minuteTemp = item.TimeStart.Minutes;
                    var minute = minuteTemp > 10 ? minuteTemp.ToString() : string.Format("0{0}", minuteTemp.ToString());
                    movie.ShowTime.Add(new ShowTimeModel()
                    {
                        Id = item.Id,
                        TimeStart = string.Format("{0}:{1}", hour, minute)
                    });
                }

                movie.Address = cinema.Address;
                movie.IdCinema = searchMovie.CinemaId;

                return movie;
            }

            return null;
        }
    }
}
