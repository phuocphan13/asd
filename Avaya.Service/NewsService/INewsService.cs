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
    public interface INewsService
    {
        List<NewsModel> GetAll();
        NewsDetailModel GetById(int id);
        //List<NewsModel> GetSideNews();
    }
}
