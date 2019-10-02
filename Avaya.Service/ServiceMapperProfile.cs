using AutoMapper;
using Avaya.Domain.Models;
using Avaya.Model;
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
        }
    }
}
