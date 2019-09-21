using System;
using System.Collections.Generic;
using System.Text;
using Avaya.Domain.Models;

namespace Avaya.Service.CinemaService
{
    public interface ICinemaService
    {
        List<Cinema> GetAll();
        //List<Cinema> GetAll(int date, Movie movie);
    }
}
