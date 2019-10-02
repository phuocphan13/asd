using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Service.PickMovieService;
using Microsoft.AspNetCore.Mvc;


namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class PickMovieController : Controller
    {
        private readonly IPickMovieService _pickmovieService;
        public PickMovieController(IPickMovieService pickmovieService)
        {
            _pickmovieService = pickmovieService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var result = _pickmovieService.GetAll();
            return Ok(result);
        }
    }
}