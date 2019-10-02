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
            var news = _newsArticleRepository.GetAll().MapTo<List<NewsModel>>();
            var Image = _newsImageRepository.GetAll();
            foreach (var temp in news)
            {
                var ImageID = _newsImageRepository.FirstOrDefault(x => x.ArticlePhotoId == temp.Id);
                if (ImageID == null)
                {
                    continue;
                }
                temp.PhotoHeight = ImageID.PhotoHeight;
                temp.PhotoUrl = ImageID.PhotoUrl;
                temp.PhotoWidth = ImageID.PhotoWidth;
            }
            return news;
        }

        public NewsDetailModel GetById(int id)
        {
            var news = _newsArticleRepository.FirstOrDefault( x => x.Id == id ).MapTo<NewsDetailModel>();
            var Image = _newsImageRepository.GetAll();
            var ImageID = _newsImageRepository.GetAllList(x => x.ArticlePhotoId == news.Id);
            news.ListImage = ImageID;
            return news;
        }
    }
}
