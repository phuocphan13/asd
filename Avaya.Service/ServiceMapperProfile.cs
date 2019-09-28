using AutoMapper;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.Movie;
using Newtonsoft.Json;
using System.Collections.Generic;

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



            //var config = new MapperConfiguration(cfg =>
            //{

            //    //    ////cfg.CreateMap<ProductDetails, ProductDetailModel>();
            //    cfg.CreateMap<Movie, MovieModel>()
            //            .ForMember(x => x.MovieName, m => m.MapFrom(f => f.Name));
            //    cfg.CreateMap<ShowTime, MovieModel>()
            //            .ForMember(x => x.ListShowTime, m => m.MapFrom(f => f.TimeStart));
            //    //    cfg.CreateMap<Movie, MovieTemptModel>();

            //});
        }
    }
}
