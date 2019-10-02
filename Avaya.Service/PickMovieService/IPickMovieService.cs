using Avaya.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.PickMovieService
{
    public interface IPickMovieService
    {
        List<RoomDetail> GetAll();
    }
}
