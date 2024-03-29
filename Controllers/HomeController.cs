﻿using Newtonsoft.Json;
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
        public JsonResult GetResponses(string name, string subject, string grade, string length)
        {

            Educator educator = new Educator()
            {
                Name = name,
                CourseGrade = Educator.GetGradeFromString(grade),
                CourseLength = Educator.GetLengthFromString(length),
                CourseSubject = Educator.GetSubjectFromString(subject)
            };

            ChatGPT chatGPTRequest = new ChatGPT();
            //chatGPTRequest.ApiCall(educator);
            List<string> data = chatGPTRequest.ApiCall(educator);

            //var dataDictionary = new Dictionary<int, string>();
            //for (int i = 0; i < data.Count; i++)
            //{
            //    dataDictionary[i] = data[i];
            //}

            //return Json(dataDictionary);
            return Json(new {data});
        }

    }
}