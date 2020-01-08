using Avaya.Domain;
using Avaya.Service.PaymentService;
using Avaya.Service.MovieService;
using Avaya.Service.NewsService;
using Avaya.Service.SeatService;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Avaya.Service.Film;
using Avaya.Service.MenuService;

namespace Avaya.Service
{
    public static class ServiceCollectionExtension
    {
        public static void ConfigureService(this IServiceCollection services, IConfiguration configuration)
        {
            services.ConfigureDomain(configuration);
            services.AddScoped<IMovieService, MovieService.MovieService>();
            services.AddScoped<IPaymentService, PaymentService.PaymentService>();
            services.AddScoped<INewsService, NewsService.NewsService>();
            services.AddScoped<ISeatService, SeatService.SeatService>();
            services.AddScoped<IFilmService, FilmService>();
            services.AddScoped<IMenuService, MenuService.MenuService>();
        }
    }
}
