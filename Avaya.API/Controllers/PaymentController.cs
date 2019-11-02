using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Avaya.Model.Payment;
using Avaya.Model.Service;
using Avaya.Service.PaymentService;
using Microsoft.AspNetCore.Mvc;

namespace Avaya.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

    public class PaymentController : Controller
    {
        private readonly IPaymentService _paymentService;

        public PaymentController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var result = _paymentService.GetAll();
            return Ok(result);
        }

        [HttpPost]
        public IActionResult Create([FromBody]BillModel bill)
        {
            var result = _paymentService.Create(bill);
            return Ok(result);
        }
    }
}