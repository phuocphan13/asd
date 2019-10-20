using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Model.SaveSeat;
using Avaya.Service.SaveSeatService;
using Microsoft.AspNetCore.Mvc;

namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class SaveSeatController : Controller
    {
        private readonly ISaveSeatService _saveSeatService;

        public SaveSeatController(ISaveSeatService saveSeatService)
        {
            _saveSeatService = saveSeatService;
        }

        [HttpPost]
        public IActionResult SaveSeat([FromBody]List<SaveSeatModel> saveSeat)
        {
            var result = _saveSeatService.SaveSeat(saveSeat);
            return Ok(result);
        }


    }
}