using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Avaya.Core.Repositories;
using Avaya.Model;
using Avaya.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Avaya.Model.MovieNews;
using Avaya.Core.Extension;

namespace Avaya.Service.NewsService
{
    public class NewsService : INewsService
    {
        private readonly IRepository<NewsArticles> _newsArticleRepository;
        private readonly IRepository<NewsImage> _newsImageRepository;

        public NewsService(IRepository<NewsArticles> newsArticleRepository,
         IRepository<NewsImage> newsImageRepository)
        {
            _newsArticleRepository = newsArticleRepository;
            _newsImageRepository = newsImageRepository;
        }

        public List<NewsModel> GetAll()
        {
            var listArticle = _newsArticleRepository.GetAll().MapTo<List<NewsModel>>();
            foreach (var item in listArticle)
            {
                var imageId = _newsImageRepository.FirstOrDefault(x => x.ArticlePhotoId == item.Id && x.Type == 1);
                item.PhotoHeight = imageId.PhotoHeight;
                item.PhotoUrl = imageId.PhotoUrl;
                item.PhotoWidth = imageId.PhotoWidth;
            }
            return listArticle;
        }

        public NewsDetailModel GetById(int id)
        {
            var article = _newsArticleRepository.Get(id).MapTo<NewsDetailModel>();
            return article;
        }

    }  
}
