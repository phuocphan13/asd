using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Service;
using Avaya.Service.MenuService;
using Microsoft.AspNetCore.Mvc;

namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class MenuController : Controller
    {
        private readonly IMenuService _menuService;
        public MenuController(IMenuService menuService)
        {
            _menuService = menuService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var listMenus = _menuService.GetAll();
            return Ok(listMenus);
        }
    }
}