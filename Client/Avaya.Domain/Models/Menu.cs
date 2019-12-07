using System;
using System.Collections.Generic;

namespace Avaya.Domain.Models
{
    public partial class Menu
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Parent { get; set; }
        public int? OrderBy { get; set; }
    }
}
