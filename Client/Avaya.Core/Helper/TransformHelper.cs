using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Core.Helper
{
    public static class TransformHelper
    {
        public static string TimeIntToString(int time)
        {
            var hours = time / 60;
            var minutes = time - hours * 60;

            var stringHour = hours.ToString();
            var stringMinute = minutes < 10 ? $"0{minutes.ToString()}" : minutes.ToString();

            return $"{stringHour} hr {stringMinute} min";
        }
    }
}
