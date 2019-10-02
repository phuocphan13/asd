using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Service;
using Avaya.Service.NewsService;
using Microsoft.AspNetCore.Mvc;

namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    public class MovieNewsController : Controller
    {
        private readonly INewsService _newsService;
        public MovieNewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var listNews = _newsService.GetAll();
            return Ok(listNews);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var newsItem = _newsService.GetById(id);
            return Ok(newsItem);
        }

    }
}
