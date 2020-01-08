using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model;
using Avaya.Model.Menu;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Avaya.Service.MenuService
{
    public class MenuService : IMenuService
    {
        private readonly IRepository<Menu> _menuRepository;

        public MenuService(IRepository<Menu> menuRepository)
        {
            _menuRepository = menuRepository;
        }

        public List<MenuModel> GetAll()
        {
            var entities = _menuRepository.GetAll().ToList();
            var listMenu = entities.Where(x => x.Parent == 0).OrderBy(x => x.OrderBy).MapTo<List<MenuModel>>();

            foreach (var item in listMenu)
            {
                item.MenuChildren = entities.Where(x => x.Parent == item.Id)
                    .OrderBy(x => x.OrderBy).MapTo<List<MenuChild>>();
            }

            return listMenu;
        }
    }
}
