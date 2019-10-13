using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.ShowSeat;
using Avaya.Service;
using Avaya.Service.ShowSeatService;
using Microsoft.AspNetCore.Mvc;

namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ShowSeatController : Controller
    {
        private readonly IShowSeatService _showSeatService;

        public ShowSeatController(IShowSeatService showSeatService)
        {
            _showSeatService = showSeatService;
        }

        [HttpPost]
        public IActionResult GetListSeats([FromBody]SearchSeatModel searchSeat)
        {
            var result = _showSeatService.GetShowSeat(searchSeat);
            return Ok(result);
        }
    }
}
