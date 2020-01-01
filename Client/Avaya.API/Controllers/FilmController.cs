using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Service.Film;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Avaya.API.Controllers
{
    [Authorize(Policy = "ApiReader")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FilmController : ControllerBase
    {
        private readonly IFilmService _filmService;

        public FilmController(IFilmService filmService)
        {
            _filmService = filmService;
        }

        [Authorize(Policy = "consumer")]
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

        [HttpGet]
        public IActionResult GetListFilmDetails(int filmId, int numberOfFilms)
        {
            var listNominationFilms = _filmService.GetListFilmDetails(filmId, numberOfFilms);
            return Ok(listNominationFilms);
        }
    }
}