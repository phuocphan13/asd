using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Service;
using Avaya.Service.CinemaService;
using Microsoft.AspNetCore.Mvc;

namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    public class MenuController : Controller
    {
        private readonly ICinemaService _cinemaService;
        public MenuController(ICinemaService cinemaService)
        {
            _cinemaService = cinemaService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var listMenus = _cinemaService.GetAll();
            return Ok(listMenus);
        }

        //[HttpGet("{query}")]
        //public IActionResult GetData(int query)
        //{
        //    var listMenus = _menuService.Change(query);
        //    return Ok(listMenus);
        //}

        //[HttpPost]
        //public IActionResult GetPost([FromBody] ProductDetailModel abc)
        //{
        //    //var listMenus = _menuService.GetAll();
        //    return Ok("asdasd");
        //}
    }
}