using AutoMapper;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.Menu;
using Avaya.Model.Movie;
using Newtonsoft.Json;
using System.Collections.Generic;
using Avaya.Model.ShowSeat;
using Avaya.Model.MovieNews;
using Avaya.Model.FilmOnline;
using Avaya.Core.Helper;
using Avaya.Model.SaveSeat;
using Avaya.Model.Service;
using Avaya.Model.Payment;

namespace Avaya.Service
{
    public class ServiceMapperProfile : Profile
    {
        public ServiceMapperProfile()
        {
            CreateMap<Movie, MovieTemptModel>().ReverseMap();
            CreateMap<Movie, MovieModel>().ReverseMap();
            CreateMap<Cinema, MovieModel>()
                .ForMember(x => x.Address, opt => opt.MapFrom(i => i.Name))
                .ReverseMap();
            CreateMap<ShowTime, MovieModel>().ReverseMap();
            CreateMap<Menu, MenuModel>().ReverseMap();
            CreateMap<Room, SeatModel>().ReverseMap();
            CreateMap<ReservedSeat, ReservedSeatModel>().ReverseMap();
            CreateMap <Avaya.Domain.Models.Service, PaymentModel >().ReverseMap();

            #region Payment Mapping
            CreateMap<Bill, BillModel>()
                .ForMember(x => x.UserId, opt => opt.MapFrom(i => i.IdUser))
                .ReverseMap();
            CreateMap<BillDetail, BillDetailModel>()
                .ForMember(x => x.ServiceId, opt => opt.MapFrom(i => i.IdService))
                .ReverseMap();
            CreateMap<Booking, ShowSeatModel>().ReverseMap();
            CreateMap<RoomDetail, ShowSeatModel>().ReverseMap();
            CreateMap<SeatType, ShowSeatModel>().ReverseMap();
            CreateMap<RoomDetail, SeatModel>().ReverseMap();
            CreateMap<Booking, SaveSeatModel>().ReverseMap();
            CreateMap<Booking, RoomDetail>().ForMember(x => x.Id, y => y.Ignore()).ReverseMap();
            #endregion

            #region Film Online Mapping
            CreateMap<FilmOnline, FilmCarouselModel>();
            
            CreateMap<FilmOnline, FilmNominationModel>()
                .ForMember(x => x.Time, opt => opt.MapFrom(i => i.Duration)).ReverseMap();
            #endregion

            #region Film Offline Mapping
            CreateMap<Movie, SearchBoxMovieModel>().ReverseMap();
            CreateMap<Cinema, SearchBoxCinemaModel>().ReverseMap();
            #endregion
        }
    }
}
