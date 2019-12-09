using Avaya.Model.Seat;
using System.Collections.Generic;

namespace Avaya.Service.SeatService
{
    public interface ISeatService
    {
        List<ShowSeatModel> GetShowSeat(SearchSeatModel searchSeat);
    }
}
