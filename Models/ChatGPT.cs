using System;
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
        private static string apiKey = "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"; //need to hide this

        public string ApiCall(Educator educator) //add Educator param and change strings to enum for Educator inputs!
        {

            

            var input = new //add 'n' completions; add switch for max tokens & length; 'short: max tokens = 100, n = 4' 'medium: max tokens = 200, n = 2' etc.
                {
                    model = "text-davinci-002",
                    prompt = $"As a teacher give {educator.CourseLength} feedback to {educator.Name} who recieved a grade of {educator.CourseGrade} in {educator.}",
                    max_tokens = 100,
                    temperature = 1
                };

                string jsonInput = JsonConvert.SerializeObject(input);

                var headers = new Dictionary<string, string>
            {
                { "Content-Type", "application/json" },
                { "Authorization", $"Bearer {apiKey}" }
            };
                var response = MakeApiCall(endpoint, jsonInput, headers);
                JObject obj = JObject.Parse(response);
                string text = (string)obj["choices"][0]["text"];
                return text;
            
            
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