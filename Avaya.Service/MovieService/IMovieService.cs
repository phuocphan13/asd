﻿using Avaya.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.MovieService
{
    public interface IMovieService
    {
        List<Movie> GetAll();
        List<Movie> GetData(string query);
    }
}
