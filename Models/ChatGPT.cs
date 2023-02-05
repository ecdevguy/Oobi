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

namespace Oobi.Models
{
    public class ChatGPT
    {
        // Set the API endpoint and your API key and input parameters for the prompt
        static string endpoint = "https://api.openai.com/v1/completions";
        static string apiKey = "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"; //need to hide this
        private string length { get; set; }
        private string grade { get; set; }
        private string subject { get; set; }

        public string ApiCall(string length, string grade, string subject)
        {
            this.length = length;
            this.grade = grade;
            this.subject = subject;
            // Set the input parameters for the API call
            var input = new
            {
            model = "text-davinci-002",
            prompt = $"As a teacher give {length} feedback to Alex who recieved a grade of {grade} in {subject}",
            max_tokens = 100,
            temperature = 1
            };

        // Serialize the input parameters to a JSON string
        string jsonInput = JsonConvert.SerializeObject(input);

        // Set the HTTP headers for the request
            var headers = new Dictionary<string, string>
            {
                { "Content-Type", "application/json" },
                { "Authorization", $"Bearer {apiKey}" }
            };
            // Make the API call and get the response
        var response = MakeApiCall(endpoint, jsonInput, headers).Result;
        JObject obj = JObject.Parse(response);
        string text = (string)obj["choices"][0]["text"];
        return text;
        }

    // Method to make the API call
        static async Task<string> MakeApiCall(string endpoint, string jsonInput, Dictionary<string, string> headers)
        {
            using (var client = new HttpClient())
            {
            // Set the HTTP headers for the request
                foreach (var header in headers)
                {
                client.DefaultRequestHeaders.TryAddWithoutValidation(header.Key, header.Value);
                }

            // Make the POST request and get the response
            var response = await client.PostAsync(endpoint, new StringContent(jsonInput, Encoding.UTF8, "application/json"));
            return await response.Content.ReadAsStringAsync();
            }
        }
    }
}