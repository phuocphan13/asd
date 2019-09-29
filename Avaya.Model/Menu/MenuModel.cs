using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Model.Menu
{
    public class MenuModel : BaseModel
    {
        public MenuModel()
        {
            MenuChildren = new List<MenuChild>();
        }

        public string Name { get; set; }

        public List<MenuChild> MenuChildren { get; set; }
    }
}
