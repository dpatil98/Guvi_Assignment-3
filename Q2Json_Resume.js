/*  Name    : Dhananjay Patil
    Battch  : B28
    Q1 - Create your own resume data in JSON format
*/ 
console.log("");
console.log("Q2 - Create your own resume data in JSON format");

var Resume = {
    "basics": {
      "name": "Dhananjay Sunil Patil",
      "label": "Full Stack Developer",
      "email": "dsp5898@gmail.com",
      "phone": "7038268891",
      "summary": "To improve my skills and knowledge and implement it in organization for growth and development of organization and myself",
      "location": {
        "address": "10,Building Rajyog,Ganesh Colony",
        "postalCode": "411057",
        "city": "Pune",
        "State": "Maharashtra"
      },
    },
    "education": [{
       "Degree" :[{"Qualification": "B.E(Information Tecnology)",
        "Year Of Passing": "2021",
        "Name of college/University": "Sandip Institute of Technology and Research Center - Nashik, MH (SPPU)",
        "CGPA": "7.1"}],

        "HSC" :[{"Qualification": "HSC(12th)",
        "Year Of Passing": "2016",
        "Name of college/University": "Sardar Vallabhbhai Patel Arts & Science College - Ainpur, MH",
        "Percentage": "67.23"}],

        "SSC" :[{"Qualification": "SSC(10th)",
        "Year Of Passing": "2014",
        "Name of college/University": "Swaminarayan Gurukul - Savada, MH",
        "CPercentage": "75.4"}],

     
      "courses": [
        "FullStack Web Development (MERN)"
      ]
    }],
    "skills": [{
      "name": "Web Development",
      "level": "Master",
      "languages": [
        "HTML",
        "CSS",
        "Bootstrap",
        "react.js",
        "Express.js",
        "MangoDB",
        "Nodejs",
        "MySql"
      ]
    }],
    "languages": [{
      "language": ["English","Hindi","Marathi"],
      "Native-Language": "Marathi"
    }],
    "hobbies": [{
      "name":["Tracking", "Online Gaming","coding"]
    
    }],
    "projects": [{
      "name": "Gym Website for college MiniProject",
      "description": "Fully function Gym Website,using HTML,CSS,JS,Bootstrap,PHP,MySql ",
      "highlights": [
        "Got aknowleged and praised by staff for making fully function website with eye catching design "
      ],

    }]
  }

  console.log(Resume)