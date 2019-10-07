using AutoMapper;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.Menu;
using Avaya.Model.Movie;
using Newtonsoft.Json;
using System.Collections.Generic;
using Avaya.Model.ShowSeat;
using Avaya.Model.MovieNews;

namespace Avaya.Service
{
    public class ServiceMapperProfile : Profile
    {
        public ServiceMapperProfile()
        {
            var config = new MapperConfiguration(cfg => {
            
                CreateMap<NewsArticles, NewsModel>().ReverseMap();
                CreateMap<NewsArticles, NewsDetailModel>().ReverseMap();
            });
            CreateMap<Movie, MovieTemptModel>().ReverseMap();
            CreateMap<Movie, MovieModel>().ReverseMap();
            CreateMap<Cinema, MovieModel>().ReverseMap();
            CreateMap<ShowTime, MovieModel>().ReverseMap();
            CreateMap<Menu, MenuModel>().ReverseMap();
            CreateMap<Room, SeatModel>().ReverseMap();
            CreateMap<ReservedSeat, ReservedSeatModel>().ReverseMap();
            CreateMap<SeatType, SeatTypeModel>().ReverseMap();
        }
    }
}
