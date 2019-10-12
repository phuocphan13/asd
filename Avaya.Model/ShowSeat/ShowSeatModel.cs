using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.ShowSeat
{
    public class ShowSeatModel : BaseModel
    {
        public ShowSeatModel()
        {
            ReservedSeat = new List<ReservedSeatModel>();
            Seat = new List<SeatModel>();
        }

        public List<ReservedSeatModel> ReservedSeat { get; set; }
        public List<SeatModel> Seat { get; set; }
    }
}
