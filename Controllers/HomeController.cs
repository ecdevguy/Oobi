using Newtonsoft.Json.Linq;
using Oobi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Oobi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //ChatGPT chatGPT = new ChatGPT();
            //ViewBag.Response = chatGPT.ApiCall("short", "C", "math");
            return View();

        }
    }
}