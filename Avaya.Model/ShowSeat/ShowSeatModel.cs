using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.ShowSeat
{
    public class ShowSeatModel : BaseModel
    {
        public ShowSeatModel()
        {
           ReserveSeat = new List<ReservedSeatModel>();

           Seat = new List<SeatModel>();

           SeatType = new List<SeatTypeModel>();
        }
        public List<ReservedSeatModel> ReserveSeat { get; set; }
        public List<SeatModel> Seat { get; set; }
        public List<SeatTypeModel> SeatType { get; set; }
    }
}
