using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.Menu;
using System;
using System.Collections.Generic;
using System.Text;

namespace Avaya.Service
{
    public interface IMenuService
    {
        List<MenuModel> GetAll();
    }
}
