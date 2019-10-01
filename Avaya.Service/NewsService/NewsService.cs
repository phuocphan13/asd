using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Avaya.Service.NewsService
{
    class NewsService : INewsService
    {
        private readonly IRepository<NewsArticles> _newsArticleRepository;
        private readonly IRepository<NewsImage> _newsImageRepository;  

        public NewsService(IRepository<NewsArticles> newsArticleRepository,
         IRepository<NewsImage> newsImageRepository)
        {
            _newsArticleRepository = newsArticleRepository;
            _newsImageRepository = newsImageRepository;
        }

        public List<NewsArticles> GetAll()
        {
            var news = _newsArticleRepository.GetAll().ToList();
            return news;
        }
    }
}
