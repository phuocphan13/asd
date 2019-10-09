using Avaya.Model.ShowSeat;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.ShowSeatService
{
    public interface IShowSeatService
    {
        List<ShowSeatModel> GetListSeats(SearchSeatModel searchSeat);
    }
}
