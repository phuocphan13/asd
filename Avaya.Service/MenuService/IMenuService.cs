using Avaya.Model.Menu;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service.MenuService
{
    public interface IMenuService
    {
        List<MenuModel> GetAll();
    }
}
