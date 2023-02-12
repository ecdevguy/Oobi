using Newtonsoft.Json;
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
        //[HttpPost]
        //public ActionResult Index(Educator educatorJSON)
        //{
            
        //    Educator educator = new Educator(educatorJSON.Name, educatorJSON.CourseGrade, educatorJSON.CourseLength, educatorJSON.CourseSubject);
            
        //    ChatGPT chatGPTRequest = new ChatGPT();
        //    chatGPTRequest.ApiCall(educator);
        //    ViewBag.Response = chatGPTRequest.ApiCall(educator);

        //    return View();
        //}
        [HttpPost]
        public ActionResult Index(string name)
        {

            Educator educator = new Educator(name);

            ChatGPT chatGPTRequest = new ChatGPT();
            chatGPTRequest.ApiCall(educator);
            ViewBag.Response = chatGPTRequest.ApiCall(educator);

            return View();
        }

    }
}