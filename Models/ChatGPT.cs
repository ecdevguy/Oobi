﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Diagnostics;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography.X509Certificates;

namespace Oobi.Models
{
    public class ChatGPT
    {
        private static string endpoint = "https://api.openai.com/v1/completions";
       
        private static string apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY", EnvironmentVariableTarget.Machine);

        public List<string> ApiCall(Educator educator)
        {

            

            var input = new //add 'n' completions; add switch for max tokens & length; 'short: max tokens = 100, n = 4' 'medium: max tokens = 200, n = 2' etc.
                {
                    model = "text-davinci-002",
                    prompt = $"As a school teacher give generalized feedback to your student, {educator.Name}, who recieved an {educator.CourseGrade} in {educator.CourseSubject}. The feedback must be a {educator.CourseLength} length.",
                    max_tokens = 60,
                    temperature = 1,
                    n = 4
                };

                string jsonInput = JsonConvert.SerializeObject(input);

                var headers = new Dictionary<string, string>
            {
                { "Content-Type", "application/json" },
                { "Authorization", $"Bearer {apiKey}" }
            };
            var response = MakeApiCall(endpoint, jsonInput, headers);
            JObject obj = JObject.Parse(response);
            var choices = obj["choices"].Select(c => (string)c["text"]).ToList();
            for (int i = 0; i < choices.Count; i++)
            {
                string trimmedStr = choices[i].Trim();
                if (trimmedStr.StartsWith("."))
                {
                    trimmedStr = trimmedStr.Substring(1);
                }
                choices[i] = trimmedStr;
            }
            return choices;


        }

        static string MakeApiCall(string endpoint, string jsonInput, Dictionary<string, string> headers)
        {
            using (var client = new HttpClient())
            {
                foreach (var header in headers)
                {
                    client.DefaultRequestHeaders.TryAddWithoutValidation(header.Key, header.Value);
                }
                var response = client.PostAsync(endpoint, new StringContent(jsonInput, Encoding.UTF8, "application/json")).Result;
                return response.Content.ReadAsStringAsync().Result; //check for error
            }
        }
    }
}