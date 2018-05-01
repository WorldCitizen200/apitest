'use strict';


var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

// exports.list_all_tasks = function (req, res) {
//     Task.find({}, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };

exports.list_all_tasks = function (req, res) {
    res.send(dummyData);
};




exports.create_a_task = function (req, res) {
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_task = function (req, res) {
    Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_task = function (req, res) {


    Task.remove({
        _id: req.params.taskId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};


const dummyData = {
    "basics": {
        "name": "Chris Rotunno",
        "label": "Data Scientist & Creative Director",
        "picture": "http://i66.tinypic.com/fdc2s6.jpg",
        "email": "Christopher.Rotunno@Outlook.com",
        "phone": "(303) 819-4867",
        "url": "https://www.crotunno.com",
        "summary": "I am a problem solver persistently searching for patterns that emerge in nature. I have an overwhelming desire to use technological tools to explore recurring states of consciousness. While tech skills are often sought after and can be quite lucrative, my intentions are more sincere. Underneath my economic value lies my truest virtue, which is being a proactive force that helps upgrade humanity! My greatest satisfaction comes from lifting my neighbors to great heights and empowering the community.",
        "location": {
            "city": "St. Petersburg",
            "region": "Florida",
            "countryCode": "US",
            "postalCode": "33712"
        },
        "profiles": [
            {
                "network": "LinkedIn",
                "username": "Chris Rotunno",
                "url": "https://www.linkedin.com/in/christopherrotunno/"
            },
            {
                "network": "Twitter",
                "username": "ChrisRotunno",
                "url": "https://twitter.com/ChrisRotunno"
            },
            {
                "network": "Instagram",
                "username": "World_Citizen_200",
                "url": "https://www.instagram.com/world_citizen_200/"
            }
        ]
    },
    "work": [
        {
            "company": "AE Global Solutions, Inc",
            "position": "Data Insights Specialist",
            "url": "https://ask-socrates.com/",
            "startDate": "02062018",
            "endDate": "Present",
            "summary": "In this position, I maintained a fundamental role in the production quality. This entailed leanring the entire proprietary system so I could troubleshoot bugs as well as compare our outputs to other third parties",
            "highlights": [
                "A",
                "B",
                "C"
            ]
        },
        {
            "company": "Intrinio",
            "position": "Data Analyst",
            "url": "https://intrinio.com/",
            "startDate": "05212017",
            "endDate": "11062017",
            "summary": "In this position, I maintained a fundamental role in the production quality. This entailed leanring the entire proprietary system so I could troubleshoot bugs as well as compare our outputs to other third parties",
            "highlights": [
                "A",
                "B",
                "C"
            ]
        },
        {
            "company": "Wells Fargo",
            "position": "Teller, Lead Teller, Consumer Lending Intern",
            "url": "https://www.wellsfargo.com/",
            "startDate": "12122015",
            "endDate": "08122017",
            "summary": "In this position, I maintained a fundamental role in the production quality. This entailed leanring the entire proprietary system so I could troubleshoot bugs as well as compare our outputs to other third parties",
            "highlights": [
                "A",
                "B",
                "C"
            ]
        }
    ],
    "volunteer": [
        {
            "organization": "Goodwill Industries International",
            "position": "Support",
            "url": "http://www.goodwill.org/",
            "startDate": "01152017",
            "endDate": "05152017",
            "summary": "In this position, I supported the entire staff by organizing the donation workstations as well as the shelves in the front of house.",
            "highlights": [
                "Found vintage Life Magazines from 1970's in mint condition at bottom of the media garbage pile."
            ]
        }
    ],
    "education": [
        {
            "institution": "Univerity of Colorado, Boulder",
            "area": "Business Administration",
            "studyType": "Bachelor",
            "startDate": "08262014",
            "endDate": "05122017",
            "gpa": "3.24/4.0",
            "courses": [
                "Sustainable Operations",
                "Corporate Social Responsibility",
                "Corporate Finance",
                "Business Analytics"
            ]
        },
        {
            "institution": "Front Range Community College",
            "area": "General",
            "studyType": "Associates",
            "startDate": "01212011",
            "endDate": "07122014",
            "gpa": "3.67",
            "courses": [
                "Spanish",
                "Economics (Macro/Micro)",
                "Business Statistics",
                "Managerial Accounting"
            ]
        }
    ],
    "awards": [
        {
            "title": "GraphQL Essential Training Certificate",
            "date": "03152018",
            "awarder": "LinkedIn",
            "summary": "Learned how to set schemas for Mongo and Sql. Used GraphiQl IDE to run queries and mutations."
        },
        {
            "title": "Cum Laude",
            "date": "07152014",
            "awarder": "Front Range Community College",
            "summary": ""
        },
        {
            "title": "Winner of Summer Intern Networking Challenge",
            "date": "0615/2016",
            "awarder": "Wells Fargo",
            "summary": "Recognized by recruitmnent for networking with fellow interns and upper management."
        }
    ],
    "publications": [
        {
            "name": "",
            "publisher": "",
            "releaseDate": "",
            "url": "",
            "summary": ""
        }
    ],
    "skills": [
        {
            "name": "Public Speaking",
            "level": "Expert",
            "keywords": [
                "Voice Inflecition",
                "Audience",
                "Cues"
            ]
        },
        {
            "name": "Communication",
            "level": "Expert",
            "keywords": [
                "Empathy",
                "Paitence",
                "Response"
            ]
        },
        {
            "name": "Web Development",
            "level": "Intermediate",
            "keywords": [
                ".Net",
                "GraphQL",
                "Linux",
                "Version Control",
                "API",
                "AI",
                "Machine Learning",
                "Cognitive Computing"
            ]
        }
    ],
    "languages": [
        {
            "name": "English",
            "level": "Expert"
        }
    ],
    "interests": [
        {
            "name": "Self-Development",
            "keywords": [
                "I",
                "Cycle",
                "Persistence",
                "Decision-Making",
                "Translation"
            ]
        }
    ],
    "references": [
        {
            "name": "Abbas Carmody",
            "reference": ""
        },
        {
            "name": "Joshua Loffelholz",
            "reference": ""
        },
        {
            "name": "Kai Larsen",
            "reference": ""
        },
        {
            "name": "Rosa Hendijani",
            "reference": ""
        },
        {
            "name": "Brandon Baldoni",
            "reference": ""
        }
    ]
}