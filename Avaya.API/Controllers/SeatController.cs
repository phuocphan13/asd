using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.BookingSeat;
using Avaya.Model.Seat;
using Avaya.Service;
using Avaya.Service.SeatService;
using Microsoft.AspNetCore.Mvc;

namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class SeatController : Controller
    {
        private readonly ISeatService _SeatService;
        public SeatController(ISeatService SeatService)
        {
            _SeatService = SeatService;
        }

        [HttpPost]
        public IActionResult GetListSeats([FromBody]SearchSeatModel searchSeat)
        {
            var result = _SeatService.GetShowSeat(searchSeat);
            return Ok(result);
        }
    }
}
