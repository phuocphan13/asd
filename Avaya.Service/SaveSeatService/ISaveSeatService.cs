using Avaya.Model.SaveSeat;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.SaveSeatService
{
    public interface ISaveSeatService
    {
       bool SaveSeat (List<SaveSeatModel> saveSeatModel);
    }
}
