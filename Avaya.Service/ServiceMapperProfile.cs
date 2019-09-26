using AutoMapper;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.ShowSeat;

namespace Avaya.Service
{
    public class ServiceMapperProfile : Profile
    {
        public ServiceMapperProfile()
        {
            CreateMap<Room, SeatModel>().ReverseMap();
            CreateMap<ReservedSeat, ReservedSeatModel>().ReverseMap();
            CreateMap<SeatType, SeatTypeModel>().ReverseMap();
        }
    }
}
