using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.BookingSeat
{
    public class BookingSeatModel
    {
        public int IdShowTime { get; set; }

        public List<ReverseSeatModel> ListReverseSeats { get; set; }

        public BookingSeatModel()
        {
            ListReverseSeats = new List<ReverseSeatModel>();
        }
    }
}
