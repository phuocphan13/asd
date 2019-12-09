using Avaya.Core.Extension;
using Avaya.Core.Repositories;
using Avaya.Domain.Models;
using Avaya.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Avaya.Service
{
    public class MenuService : IMenuService
    {
        private readonly IRepository<Menu> _menuRepository;

        public MenuService(IRepository<Menu> menuRepository)
        {
            _menuRepository = menuRepository;
        }

        public List<Menu> GetAll()
        {
            return _menuRepository.GetAll().ToList();
        }
    }
}
