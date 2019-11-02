using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Bill
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public decimal Total { get; set; }
    }
}
