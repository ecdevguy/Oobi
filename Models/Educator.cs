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
            English,
            Mandarin
        }

        private readonly Guid _educatorId;
        

        public string Name { get; set; }
        public Grade CourseGrade { get; set; }
        public Length CourseLength { get; set; }

        public Subject CourseSubject { get; set; }

        public Educator(string name = "Alex", Grade courseGrade = Grade.B, Length courseLength = Length.Short, Subject courseSubject = Subject.Mandarin)

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
        public static Grade GetGradeFromString(string input)
        {
            switch (input.ToUpper())
            {
                case "A":
                    return Grade.A;
                case "B":
                    return Grade.B;
                case "C":
                    return Grade.C;
                case "D":
                    return Grade.D;
                case "F":
                    return Grade.F;
                default:
                    throw new ArgumentException("Invalid grade input.");
            }
        }
        public static Subject GetSubjectFromString(string input)
        {
            switch (input.ToLower())
            {
                case "art":
                    return Subject.Art;
                case "history":
                    return Subject.History;
                case "english":
                    return Subject.English;
                case "mandarin":
                    return Subject.Mandarin;
                case "science":
                    return Subject.Science;
                default:
                    throw new ArgumentException("Invalid subject.");
            }
        }
        public static Length GetLengthFromString(string input)
        {
            switch (input)
            {
                case "short":
                    return Length.Short;
                case "medium":
                    return Length.Medium;
                case "long":
                    return Length.Long;
                default:
                    throw new ArgumentException("Invalid length.");
            }
        }
    }

}