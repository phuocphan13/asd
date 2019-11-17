using Avaya.Model.BookingSeat;
using Avaya.Model.SaveSeat;
using Avaya.Model.ShowSeat;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.SeatService
{
    public interface ISeatService
    {
        List<ShowSeatModel> GetShowSeat(SearchSeatModel searchSeat);
    }
}
