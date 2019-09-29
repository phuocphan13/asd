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
    //public class MenuService : IMenuService
    //{
    //    //private readonly IRepository<Menu> _menuRepository;
    //    //private readonly IRepository<ProductDetails> _productDetailsRepository;

    //    //public MenuService(IRepository<Menu> menuRepository,
    //    //    IRepository<ProductDetails> productDetailsRepository)
    //    //{
    //    //    _menuRepository = menuRepository;
    //    //    _productDetailsRepository = productDetailsRepository;
    //    //}

    //    //public List<Menu> GetAll()
    //    //{
    //    //    //var list = _menuRepository.GetAll().OrderBy(x => x.DisplayOrder).ToList();
    //    //    //return list.ToList();
    //    //    return null;
    //    //}

    //    //public List<ProductDetailModel> Change(int query)
    //    //{
    //    //    var list = new List<ProductDetailModel>();
    //    //    if (query == 1)
    //    //    {
                
    //    //           list = _productDetailsRepository.GetAll().Where(x => x.Id > 6).MapTo<List<ProductDetailModel>>();
    //    //    }
    //    //    else
    //    //    {
    //    //        list = _productDetailsRepository.GetAll().Where(x => x.Id < 6).MapTo<List<ProductDetailModel>>();
    //    //    }

    //    //    return list;
    //    //}
    //}
}
