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
        private string length { get; set; }
        private string grade { get; set; }
        private string subject { get; set; }

        public string ApiCall(string length, string grade, string subject)
        {

            this.length = length;
            this.grade = grade;
            this.subject = subject;

            var input = new
                {
                    model = "text-davinci-002",
                    prompt = $"As a teacher give {length} feedback to Alex who recieved a grade of {grade} in {subject}",
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
                return response.Content.ReadAsStringAsync().Result;
            }
        }
    }
}