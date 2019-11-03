using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Service.Film;
using Microsoft.AspNetCore.Mvc;

namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class FilmController : Controller
    {
        private readonly IFilmService _filmService;

        public FilmController(IFilmService filmService)
        {
            _filmService = filmService;
        }

        [HttpGet]
        public IActionResult GetListFilmsCarousel()
        {
            var listCarouselFilms = _filmService.GetListFilmsCarousel();
            return Ok(listCarouselFilms);
        }

        [HttpGet]
        public IActionResult GetListFilmsNomination()
        {
            var listNominationFilms = _filmService.GetListFilmsNomination();
            return Ok(listNominationFilms);
        }

        [HttpGet]
        public IActionResult GetLoadMoreFilmNomination(int numberFilmNominationCurrent, int numberFilmNominationTake)
        {
            var listNominationFilms = _filmService.GetLoadMoreFilmNomination(numberFilmNominationCurrent, numberFilmNominationTake);
            return Ok(listNominationFilms);
        }

        [HttpGet("{filmId}")]
        public IActionResult GetFilmDetail(int filmId)
        {
            var filmDetail = _filmService.GetFilmDetail(filmId);
            return Ok(filmDetail);
        }
    }
}