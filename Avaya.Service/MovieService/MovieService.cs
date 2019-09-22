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
            //var list = _movieRepository.GetAll().ToList();
            //var entities = _movieRepository.GetAll().FirstOrDefault();
            //var list = AutoMapper.Mapper.Map<Movie, MovieModel>(entities);
            //var list = new List<MovieModel>();
            //var moviename = _movieRepository.FirstOrDefault(x => x.Name.Contains(searchMovie.MovieName));
            //var bookingdetail = _bookingDetailRepository.GetAll().Where(x => x.IdMovie == moviename.Id).ToList();
            //foreach (var item in bookingdetail)
            //{
            //    var cinema = _cinemaRepository.GetAll().Where(x => x.Id == item.IdCinema).ToList();
            //    foreach (var items in cinema)
            //    {

            //    }
            //}
            //var list  = _movieRepository.GetAll().Where(x=>x.Name.Contains(searchMovie.MovieName))
            //var abc = AutoMapper.Mapper.Map<Movie, MovieTemptModel>(movie);


            var movie = _movieRepository.FirstOrDefault(x => x.Id == int.Parse(searchMovie.MovieName)).MapTo<MovieModel>();

            var cinema = _cinemaRepository.FirstOrDefault(x => x.Id == int.Parse(searchMovie.CinemaName)).MapTo<MovieModel>();

            var bookingdetail = _bookingDetailRepository.FirstOrDefault(x => x.IdMovie == int.Parse(searchMovie.MovieName)
                                && x.IdCinema == int.Parse(searchMovie.CinemaName)
                                && x.Date == DateTime.Parse(searchMovie.Date));

            movie.ShowTime = _showTimeRepository.GetAll()
                .Where(x => x.IdBookingDetail == bookingdetail.Id).MapTo<List<ShowTimeModel>>();

            
            movie.Address = cinema.Address;            
            
            return movie;
        }
    }
}
