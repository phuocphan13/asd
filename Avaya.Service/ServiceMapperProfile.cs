using AutoMapper;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.Menu;
using Avaya.Model.Movie;
using Newtonsoft.Json;
using System.Collections.Generic;
using Avaya.Model.ShowSeat;
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
            CreateMap<Cinema, MovieModel>().ReverseMap();
            CreateMap<ShowTime, MovieModel>().ReverseMap();
            CreateMap<Menu, MenuModel>().ReverseMap();
            CreateMap<Room, SeatModel>().ReverseMap();
            CreateMap<ReservedSeat, ReservedSeatModel>().ReverseMap();
            CreateMap<SeatType, SeatTypeModel>().ReverseMap();
            CreateMap <Avaya.Domain.Models.Service, PaymentModel >().ReverseMap();

            #region Payment Mapping
            CreateMap<Bill, BillModel>()
                .ForMember(x => x.UserId, opt => opt.MapFrom(i => i.IdUser))
                .ReverseMap();
            CreateMap<BillDetail, BillDetailModel>()
                .ForMember(x => x.ServiceId, opt => opt.MapFrom(i => i.IdService))
                .ReverseMap();
            #endregion
        }
    }
}
