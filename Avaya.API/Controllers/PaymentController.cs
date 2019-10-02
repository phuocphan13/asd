using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Model.Service;
using Avaya.Service.PaymentService;
using Microsoft.AspNetCore.Mvc;

namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

    public class PaymentController : Controller
    {
        private readonly IPaymentService _PaymentService;

        public PaymentController(IPaymentService paymentService)
        {
            _PaymentService = paymentService;
        }

        [HttpPost]
        public IActionResult GetListPayment([FromBody]List<SearchServiceModel> searchPayment)
        {
            var result = _PaymentService.GetListPayment(searchPayment);
            return Ok(result);
        }
    }
}