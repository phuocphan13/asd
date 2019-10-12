using Avaya.Model.ShowSeat;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.ShowSeatService
{
    public interface IShowSeatService
    {
        ShowSeatModel GetListSeats(SearchSeatModel searchSeat);
    }
}
