const mathClasses = [
  {
    key: 0,
    tooltip: "College Algebra and Trigonometry",
    label: "MTH 123",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0660871",
  },
  {
    key: 1,
    tooltip: "Discrete Mathematical Structures for Computer Science",
    label: "MTH 228",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626712",
  },
  {
    key: 2,
    tooltip: "Calculus Computer Laboratory",
    label: "MTH 229",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0661121",
  },
  {
    key: 3,
    tooltip: "Calculus I with Pre-Calculus",
    label: "MTH 230",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0661131",
  },
  {
    key: 4,
    tooltip: "Analytic Geometry and Calculus I",
    label: "MTH 231",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0661141",
  },
  {
    key: 5,
    tooltip: "Calculus II",
    label: "MTH 232",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0661151",
  },
];

const mathProfileClasses = [
  {
    key: 0,
    tooltip: "College Algebra and Trigonometry",
    label: "MTH 123",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0660871",
  },
  {
    key: 1,
    tooltip: "Calculus I with Pre-Calculus",
    label: "MTH 230 & 229",
    url: ["https://csi-undergraduate.catalog.cuny.edu/courses/0661131", "https://csi-undergraduate.catalog.cuny.edu/courses/0661121"],
  },
  {
    key: 2,
    tooltip: "Analytic Geometry and Calculus I",
    label: "MTH 231 & 229",
    url: ["https://csi-undergraduate.catalog.cuny.edu/courses/0661141", "https://csi-undergraduate.catalog.cuny.edu/courses/0661121"],
  },
  {
    key: 3,
    tooltip: "Calculus II",
    label: "MTH 232",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0661151",
  },
];

const cscClasses = [
  {
    key: 0,
    tooltip: "Introduction to Computer Science",
    label: "CSC 126",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626561",
  },
  {
    key: 1,
    tooltip: "Intermediate Programming",
    label: "CSC 211",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626631",
  },
  {
    key: 2,
    tooltip: "Computer Organization",
    label: "CSC 220",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626651",
  },
   {
    key: 15,
    tooltip: "Networking and Security",
    label: "CSC 221",
    url: "https://csicuny.smartcatalogiq.com/en/current/undergraduate-catalog/courses/csc-computer-science/200/csc-221/",
  },
  {
    key: 3,
    tooltip: "Discrete Mathematical Structures for Computer Science",
    label: "CSC 228",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626711",
  },
  {
    key: 4,
    tooltip: "Operating Systems Programming Laboratory",
    label: "CSC 305",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1209231",
  },
  {
    key: 5,
    tooltip: "Introduction to Database Systems",
    label: "CSC 315",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1300971",
  },
  {
    key: 6,
    tooltip: "Data Structures",
    label: "CSC 326",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626831",
  },
  {
    key: 7,
    tooltip: "Object-Oriented Software Design",
    label: "CSC 330",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626851",
  },
  {
    key: 8,
    tooltip: "Operating Systems I",
    label: "CSC 332",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626871",
  },
  {
    key: 9,
    tooltip: "Digital Circuits Design",
    label: "CSC 346",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626921",
  },
  {
    key: 10,
    tooltip: "Digital Circuits Laboratory",
    label: "CSC 347",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626931",
  },
  {
    key: 11,
    tooltip: "Analysis of Algorithms",
    label: "CSC 382",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626991",
  },
  {
    key: 12,
    tooltip: "Software Engineering",
    label: "CSC 430",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627081",
  },
  {
    key: 13,
    tooltip: "Computer Architecture",
    label: "CSC 446",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627131",
  },
  {
    key: 14,
    tooltip: "Seminar in Computer Science",
    label: "CSC 490",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627231",
  },
  {
    key: 15,
    tooltip: "Networking and Security",
    label: "CSC 221",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1545761",
  },
];

const cscElectives = [
  {
    key: 0,
    tooltip: "Computer Hacking Revealed",
    label: "CSC 223",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626661",
  },
  {
    key: 1,
    tooltip: "Introduction to Web Development and the Internet",
    label: "CSC 225",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626681",
  },
  {
    key: 2,
    tooltip: "Web Database Applications",
    label: "CSC 226",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626691",
  },
  {
    key: 3,
    tooltip: "Introductory Computer Game Programming",
    label: "CSC 227",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626701",
  },
  {
    key: 4,
    tooltip: "Introduction to High Performance Computing",
    label: "CSC 229",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1087091",
  },
  {
    key: 5,
    tooltip: "Robotic Explorations",
    label: "CSC 235",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1238371",
  },
  {
    key: 6,
    tooltip: "Introduction to Data Science",
    label: "CSC 245",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1504171",
  },
  {
    key: 7,
    tooltip: "Serious Game Development",
    label: "CSC 250",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1522221",
  },
  {
    key: 8,
    tooltip: "Machine Learning and Knowledge Discovery",
    label: "CSC 412",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1471021",
  },
  // {
  //   key: 9,
  //   tooltip: "Concepts of Programming Languages",
  //   label: "CSC 420",
  //   url: "https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-420",
  // },
  {
    key: 10,
    tooltip: "Internet Data Communications",
    label: "CSC 421",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627051",
  },
  {
    key: 11,
    tooltip: "Advanced Database Management Systems",
    label: "CSC 424",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627061",
  },
  {
    key: 12,
    tooltip: "Shared Memory Parallel Computing",
    label: "CSC 425",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1371751",
  },
  {
    key: 13,
    tooltip: "Applied Cryptography",
    label: "CSC 426",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1371611",
  },
  {
    key: 14,
    tooltip: "Advanced Computer Game Programming",
    label: "CSC 427",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627071",
  },
  {
    key: 15,
    tooltip: "Advanced High Performance Computing",
    label: "CSC 429",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1090481",
  },
  // {
  //   key: 16,
  //   tooltip: "Operating Systems II",
  //   label: "CSC 432",
  //   url: "https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-432",
  // },
  // {
  //   key: 17,
  //   tooltip: "Compiler Construction",
  //   label: "CSC 434",
  //   url: "https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-434",
  // },
  {
    key: 18,
    tooltip: "Advanced Data Communications",
    label: "CSC 435",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627111",
  },
  {
    key: 19,
    tooltip: "Modern Web Development",
    label: "CSC 436",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1522231",
  },
  {
    key: 20,
    tooltip: "Mobile Application Development",
    label: "CSC 438",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1186111",
  },
  {
    key: 21,
    tooltip: "Microcontrollers",
    label: "CSC 462",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0643652",
  },
  {
    key: 22,
    tooltip: "Introductory Computer Graphics",
    label: "CSC 470",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627181",
  },
  {
    key: 23,
    tooltip: "Image Processing in Computer Science",
    label: "CSC 475",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627191",
  },
  {
    key: 24,
    tooltip: "Artificial Intelligence",
    label: "CSC 480",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627201",
  },
  {
    key: 25,
    tooltip: "Discrete Simulation",
    label: "CSC 482",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627211",
  },
  {
    key: 26,
    tooltip: "Theory of Computation",
    label: "CSC 484",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627221",
  },
];

const cscProfileClasses = [
  {
    key: 0,
    tooltip: "Introduction to Computer Science",
    label: "CSC 126",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626561",
  },
  {
    key: 1,
    tooltip: "Any 200 level elective",
    label: "200 level elective*",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626631",
  },
  {
    key: 2,
    tooltip: "Intermediate Programming",
    label: "CSC 211",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626631",
  },
 
  {
    key: 3,
    tooltip: "Computer Organization",
    label: "CSC 220",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626651",
  },
  {
    key: 15,
    tooltip: "Networking and Security",
    label: "CSC 221",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1545761",

  },
  {
    key: 4,
    tooltip: "Discrete Mathematical Structures for Computer Science",
    label: "CSC 228",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626711",
  },
  {
    key: 5,
    tooltip: "Introduction to Database Systems",
    label: "CSC 315",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/1300971",
  },
  {
    key: 6,
    tooltip: "Data Structures",
    label: "CSC 326",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626831",
  },
  {
    key: 7,
    tooltip: "Object-Oriented Software Design",
    label: "CSC 330",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626851",
  },
  {
    key: 8,
    tooltip: "Operating Systems I & Laboratory",
    label: "CSC 332 & 305",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626871",
  },
  {
    key: 9,
    tooltip: "Digital Circuits Design & Laboratory",
    label: "CSC 346 & 347",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626921",
  },
  {
    key: 10,
    tooltip: "Analysis of Algorithms",
    label: "CSC 382",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0626991",
  },
  {
    key: 11,
    tooltip: "Any 400 level elective",
    label: "400 level elective*",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627081",
  },
  {
    key: 12,
    tooltip: "Software Engineering",
    label: "CSC 430",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627081",
  },
  {
    key: 13,
    tooltip: "Computer Architecture",
    label: "CSC 446",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627131",
  },
  {
    key: 14,
    tooltip: "Seminar in Computer Science",
    label: "CSC 490",
    url: "https://csi-undergraduate.catalog.cuny.edu/courses/0627231",
  },
];

module.exports = {
  mathClasses,
  cscClasses,
  cscElectives,
  cscProfileClasses,
  mathProfileClasses,
};
