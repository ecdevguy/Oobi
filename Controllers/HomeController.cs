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
            
            return View();
        }
        [HttpPost]
        public ActionResult Index(string length, string grade, string subject)
        {
            ChatGPT chatGPT = new ChatGPT();
            string response = chatGPT.ApiCall(length, grade, subject);
            
            return View(response);
        }
    }
}