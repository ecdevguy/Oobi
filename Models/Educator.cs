using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace Oobi.Models
{
    public class Educator
    {
        public enum Grade
        {
            A,
            B,
            C,
            D,
            F
        }

        public enum Length
        {
            Short,
            Medium,
            Long
        }

        public enum Subject
        {
            Art,
            History,
            Science,
            Math,
            English
        }

        private readonly Guid _educatorId;
        

        public string Name { get; set; }
        public Grade CourseGrade { get; set; }
        public Length CourseLength { get; set; }

        public Subject CourseSubject { get; set; }

        public Educator(string name = "Alex", Grade courseGrade = Grade.A, Length courseLength = Length.Short, Subject courseSubject = Subject.Math)

        {
            if (Regex.IsMatch(name, @"^[a-zA-Z]+$"))
            {
                if (name.Length <= 30)
                {
                    Name = name;
                }
                else
                {
                    throw new ArgumentException("Name must not exceed 30 characters");
                }
            }
            else
            {
                throw new ArgumentException("Name must not contain numbers");
            }

            CourseGrade = courseGrade;
            CourseSubject = courseSubject;
            CourseLength = courseLength;
            _educatorId = Guid.NewGuid();
        }

        public Guid GetEducatorId()
        {
            return _educatorId;
        }
    }

}