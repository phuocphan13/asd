using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Model.Payment;
using Avaya.Model.Service;
using Avaya.Service;
using Avaya.Service.PaymentService;
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
            var listMenu = _menuService.GetAll();
            return Ok(listMenu);
        }
    }
}
