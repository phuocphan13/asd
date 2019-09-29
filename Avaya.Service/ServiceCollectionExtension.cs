using Avaya.Domain;
using Avaya.Service.CinemaService;
using Avaya.Service.PaymentService;
using Avaya.Service.MovieService;
using Avaya.Service.PickMovieService;
using Avaya.Service.ShowSeatService;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Avaya.Service
{
    public static class ServiceCollectionExtension
    {
        public static void ConfigureService(this IServiceCollection services, IConfiguration configuration)
        {
            services.ConfigureDomain(configuration);
            services.AddScoped<ICinemaService, CinemaService.CinemaService>();
            services.AddScoped<IMenuService, MenuService>();
            services.AddScoped<IMovieService, MovieService.MovieService>();
            services.AddScoped<IPickMovieService, PickMovieService.PickMovieService>();
            services.AddScoped<IPaymentService, PaymentService.PaymentService>();
            //services.AddScoped<IMenuService, MenuService>();
            services.AddScoped<IShowSeatService, ShowSeatService.ShowSeatService>();
        }
    }
}
