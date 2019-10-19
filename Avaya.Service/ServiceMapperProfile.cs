using AutoMapper;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.Menu;
using Avaya.Model.Movie;
using Newtonsoft.Json;
using System.Collections.Generic;
using Avaya.Model.ShowSeat;
using Avaya.Model.FilmOnline;
using Avaya.Core.Helper;

namespace Avaya.Service
{
    public class ServiceMapperProfile : Profile
    {
        public ServiceMapperProfile()
        {
            CreateMap<Movie, MovieTemptModel>().ReverseMap();
            CreateMap<Movie, MovieModel>().ReverseMap();
            CreateMap<Cinema, MovieModel>().ReverseMap();
            CreateMap<ShowTime, MovieModel>().ReverseMap();
            CreateMap<Menu, MenuModel>().ReverseMap();
            CreateMap<Room, SeatModel>().ReverseMap();
            CreateMap<ReservedSeat, ReservedSeatModel>().ReverseMap();
            CreateMap<FilmOnline, FilmOnlineModel>()
                .ForMember(x => x.Time, opt => opt.MapFrom(
                    i => $"({i.ReleaseDate.Value.Year}) - {TransformHelper.TimeIntToString(i.Duration.Value)}"))
                .ReverseMap();
            CreateMap<Booking, ShowSeatModel>().ReverseMap();
            CreateMap<RoomDetail, ShowSeatModel>().ReverseMap();
            CreateMap<SeatType, ShowSeatModel>().ReverseMap();
            CreateMap<RoomDetail, SeatModel>().ReverseMap();
        }
    }
}
