using Avaya.Domain;
using Avaya.Service.CinemaService;
using Avaya.Service.NewsService;
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
            services.AddScoped<INewsService, NewsService.NewsService>();
            //services.AddScoped<IMenuService, MenuService>();
        }
    }
}
