// src/data/educationData.ts

interface EducationItem {
  school: string;
  degree: string;
  degreeNote?: string;
  duration: string;
  gpa?: string;
  coursework?: string[];
  publications?: string[];
  honors?: string[];
}

export const education: EducationItem[] = [
  {
    school: "Northeastern University",
    degree: "M.S. in Information Systems",
    degreeNote: "(Concentration in Software Engineering with emphasis on Full-Stack Development)",
    duration: "Sep 2024 – Present",
    gpa: "4.0 / 4.0",
    coursework: [
      'Application Engineering and Development',
      'Data Science Engineering Methods and Tools',
      'Program Structures and Algorithms',
      'Web Development Tools & Methods',
      'Data Management and Database Design (In Progress)',
      'Natural Language Engineering Methods/Tools (In Progress)'
    ]
  },
  {
    school: "Huazhong University of Science and Technology",
    degree: "M.S. in Information and Communication Engineering",
    degreeNote: "(Equivalent to a focus in Electrical Engineering with a specialization in Telecommunications & Signal Processing)",
    duration: "Sep 2017 – Aug 2020",
    gpa: "3.36 / 4.0",
    coursework: [
      'Object-Oriented Programming',
      'Array Signal Process',
      'Artificial Intelligent',
      'Image Analysis and Understanding',
    ],
    publications: [
      "AJ2010557 - A Combined Array Direction Finding Device, System, and Method",
      "AJ2010558 - A Distance Measurement Method Based on Linear Frequency Scanning Acoustic Waves",
    ],
    honors: [
      "Awarded first-class Master's Scholarship for three consecutive academic years",
    ],
  },
  {
    school: "Wuhan University of Technology",
    degree: "B.S. in Electronic Information Engineering",
    degreeNote: "(Aligns with U.S. Electrical Engineering curriculum, specializing in Electronics & Communications)",
    duration: "Sep 2013 – Jun 2017",
    gpa: "3.79 / 4.0",
    coursework: [
      'Computer Systems Fundamentals & Operating Systems Concepts',
      'Fundamentals of Computer Programming (C Language)',
      'Principles of Microcomputers & Communication Interfaces',
      'Data Structures & Algorithms',
      'Database & Information Systems',
      'Computer Network & Communication'
    ],
    honors: [
      "Awarded as an outstanding graduate of Wuhan University of Technology in 2017",
      "Recognized as an Excellent Student for two consecutive academic years (2014-2016)",
      "Awarded the National Scholarship for the academic year 2014-2015",
      "Awarded University Scholarship twice for the academic years 2013-2014 and 2015-2016",
    ],
  },
];
