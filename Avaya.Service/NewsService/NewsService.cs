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
            foreach (var temp in news)
            {
                var imageId = _newsImageRepository.FirstOrDefault(x => x.ArticlePhotoId == temp.Id && x.Type == 1);
                temp.PhotoHeight = imageId.PhotoHeight;
                temp.PhotoUrl = imageId.PhotoUrl;
                temp.PhotoWidth = imageId.PhotoWidth;
            }
            return news;
        }

        public NewsDetailModel GetById(int id)
        {
            var news = _newsArticleRepository.Get( id ).MapTo<NewsDetailModel>();
            return news;
        }

        //public List<NewsModel> GetSideNews()
        //{
        //    var news = _newsArticleRepository.GetAll().MapTo<List<NewsModel>>();
        //    List<int> newsIdList = new List<int>();
        //    foreach (var temp in news)
        //    {
        //        newsIdList.Add(temp.Id);

        //    }
        //    Random rnd = new Random();
        //    IEnumerable<int> randomNews = newsIdList.OrderBy(x => rnd.Next()).Take(3);
        //    foreach (var temp in randomNews)
        //    {
        //        var ImageID = _newsImageRepository.FirstOrDefault(x => x.ArticlePhotoId == temp.Id && x.Type == 1);
        //        if (ImageID == null)
        //        {
        //            continue;
        //        }
        //        temp.PhotoHeight = ImageID.PhotoHeight;
        //        temp.PhotoUrl = ImageID.PhotoUrl;
        //        temp.PhotoWidth = ImageID.PhotoWidth;
        //    }
        //}
    }
}
