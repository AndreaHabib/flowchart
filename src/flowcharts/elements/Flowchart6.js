const elements = [
    {
      id: "1",
      data: { label: "CSC 126", Desc:"Intro to Computer Science" },
      targetPosition: "left",
      sourcePosition: "bottom",
      style: {
        backgroundColor: "white",
      },
      position: { x: window.innerWidth / 2 - 250, y: 20 },
    },
    {
      id: "2",
      style: {
        backgroundColor: "white",
      },
      data: { label: "200 level elective*" ,Desc:"200 level Elective" },
      position: { x: window.innerWidth / 2 - 400, y: 120 },
    },
    {
      id: "3",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 211", Desc:"Intermediate Programming" },
      position: { x: window.innerWidth / 2 - 190, y: 120 },
    },
    {
      id: "4",
      style: {
        backgroundColor: "white",
      },
      data: { label: "MTH 123 ~" ,Desc:"College Algebra and Trig" },
      targetPosition: "right",
      sourcePosition: "bottom",
      position: { x: window.innerWidth / 2 - 650, y: 20 },
    },
    {
      id: "5",
      style: {
        backgroundColor: "white",
      },
      selectable: false,
      data: { label: "MTH 231 or MTH 230", Desc:"Calc I or Calc I with PreCalc" },
      position: { x: window.innerWidth / 2 - 650, y: 120 },
    },
    {
      id: "5a",
      style: {
        backgroundColor: "white",
      },
      data: { label: "MTH 231 or MTH 230", Desc:"Calc I or Calc I with PreCalc" },
      targetPosition: "left",
      position: { x: window.innerWidth / 2 - 650, y: 120 },
    },
    {
      id: "6",
      style: {
        backgroundColor: "white",
      },
      sourcePosition: "left",
      targetPosition: "right",
      data: { label: "MTH 229", Desc:"Calculus Lab" },
      position: { x: window.innerWidth / 2 - 900, y: 120 },
    },
    {
      id: "7",
      style: {
        backgroundColor: "white",
      },
      data: { label: "MTH 232", Desc:"Calculus II" },
      position: { x: window.innerWidth / 2 - 650, y: 220 },
    },
    {
      id: "8",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC or MTH 228" , Desc:"Discrete Math" },
      position: { x: window.innerWidth / 2 - 400, y: 220 },
    },
    {
      id: "9",
      targetPosition: "top",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 326",Desc:"Data Structures"  },
      position: { x: window.innerWidth / 2, y: 220 },
    },
    {
      id: "10",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 220" , Desc:"Computer Organization" },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 + 250, y: 120 },
    },
    {
      id: "11",
      style: {
        backgroundColor: "white",
      },
      selectable: false,
      data: { label: "CSC 346 or ENS 220",Desc:"Digital Circuits Design or Introduction to Computer Engineering" },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 + 370, y: 200 },
    },
    {
      id: "11a",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 346 or ENS 220" ,Desc:"Digital Circuits Design or Introduction to Computer Engineering" },
      targetPosition: "right",
      position: { x: window.innerWidth / 2 + 370, y: 200 },
    },
    {
      id: "12",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 347",Desc:"Digital Circuits Laboratory" },
      targetPosition: "left",
      position: { x: window.innerWidth / 2 + 600, y: 200 },
    },
    {
      id: "13",
      style: {
        backgroundColor: "white",
      },
      data: { label: "MTH#",Desc:"MTH #" },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 - 900, y: 320 },
    },
    {
      id: "14",
      style: {
        backgroundColor: "white",
      },
      data: { label: "MTH#", Desc:"MTH #" },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 - 650, y: 320 },
    },
    {
      id: "15",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 382", Desc:"Analysis of Algorithms" },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 - 400, y: 320 },
    },
    {
      id: "16",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 330", Desc:"Object-Oriented Software Design" },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 - 100, y: 380 },
    },
    {
      id: "17",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 315", Desc:"Introduction to Database Systems" },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 + 120, y: 380 },
    },
    {
      id: "18",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 446", Desc:"Computer Architecture"  },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 + 550, y: 300 },
    },
    {
      id: "19",
      style: {
        backgroundColor: "white",
      },
      selectable: false,
      data: { label: "CSC 332", Desc:"Operating Systems I" },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 + 350, y: 420 },
    },
    {
      id: "19a",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 332", Desc:"Operating Systems I" },
      targetPosition: "right",
      position: { x: window.innerWidth / 2 + 350, y: 420 },
    },
    {
      id: "20",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 305", Desc:"Operating Systems Programming Laboratory" },
      sourcePosition : "left",
      position: { x: window.innerWidth / 2 + 600, y: 420 },
    },
    {
      id: "21",
      style: {
        backgroundColor: "white",
      },
      data: { label: "400 level elective*", Desc:"400 level elective" },
      position: { x: window.innerWidth / 2 - 300, y: 420 },
    },
    {
      id: "22",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 490**", Desc:"Seminar in Computer Science" },
      position: { x: window.innerWidth / 2 - 200, y: 540 },
    },
    {
      id: "23",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 430", Desc:"Software Engineering" },
      position: { x: window.innerWidth / 2 + 100, y: 540 },
    },
    {
      id: "start",
      type: "input",
      data: {
        label: `
          Start here!
          You can also click this box to reset the pathways!`,
      },
      targetPosition: "bottom",
      sourcePosition: "bottom",
      style: {
        backgroundColor: "white",
      },
      position: { x: window.innerWidth / 2 - 250, y: -70 },
    },
    {
      id: "note",
      type: "output",
      data: {
        label:
          "~ depending on your grade in MTH 123, you may take MTH 130 next, or MTH 230 in place of MTH 231.",
      },
      selectable: false,
      targetPosition: "bottom",
      sourcePosition: "bottom",
      style: {
        backgroundColor: "white",
      },
      position: { x: window.innerWidth / 2 - 650, y: -100 },
    },
    {
      id: "29",
      type: "output",
      data: {
        label:
          "Two additional MTH courses having MTH 232 or higher as a prerequisite (except MTH 306)",
      },
      selectable: false,
      targetPosition: "top",
      sourcePosition: "top",
      style: {
        backgroundColor: "white",
      },
      position: { x: window.innerWidth / 2 - 780, y: 400 },
    },
    {
      id: "28",
      type: "output",
      data: {
        label:
          "CSC 490 is for a senior standing only. Must get waiver from advisor before registering.",
      },
      selectable: false,
      targetPosition: "top",
      sourcePosition: "top",
      style: {
        backgroundColor: "white",
      },
      position: { x: window.innerWidth / 2 - 200, y: 600 },
    },
    {
      id: "note2",
      type: "output",
      data: {
        label: "OR",
      },
      selectable: false,
      targetPosition: "right",
      sourcePosition: "top",
      style: {
        backgroundColor: "white",
      },
      position: { x: window.innerWidth / 2 - 800, y: 20 },
    },
    {
      id: "30",
      data: { label: "MTH 125", Desc:"College Algebra and Trigonometry with Intermediate Algebra Review" },
      targetPosition: "right",
      sourcePosition: "right",
      style: {
        backgroundColor: "white",
      },
      position: { x: window.innerWidth / 2 - 950, y: 20 },
    },
    // {
    //   id: "31",
    //   data: { label: "CSC 221", Desc:"Here is something" },
    //   targetPosition: "right",
    //   sourcePosition: "right",
    //   style: {
    //     backgroundColor: "white",
    //   },
    //   position: { x: window.innerWidth / 2 - 950, y: 20 },
    // },
    {
      id: "32",
      style: {
        backgroundColor: "white",
      },
      data: { label: "CSC 221" , Desc:"Networks and Security" },
      targetPosition: "top",
      position: { x: window.innerWidth / 2 + 30, y: 120 },
    },
    {
      id: "e1-2",
      source: "1",
      target: "2",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e1-4",
      source: "1",
      target: "4",
      arrowHeadType: "arrowclosed",
      type: "smoothstep",
    },
    {
      id: "e4-1",
      source: "4",
      target: "1",
      arrowHeadType: "arrowclosed",
      type: "smoothstep",
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      arrowHeadType: "arrowclosed",
      type: "smoothstep",
    },
    {
      id: "e6-5a",
      source: "6",
      target: "5a",
      arrowHeadType: "arrowclosed",
      type: "smoothstep",
    },
    {
      id: "e6-7",
      source: "6",
      target: "7",
      arrowHeadType: "arrowclosed",
      type: "smoothstep",
    },
    {
      id: "e3-8",
      source: "3",
      target: "8",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e3-9",
      source: "3",
      target: "9",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e1-10",
      source: "1",
      target: "10",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e10-11",
      source: "10",
      target: "11",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e11a-12",
      source: "11a",
      target: "12",
      arrowHeadType: "arrowclosed",
      type: "smoothstep",
    },
    {
      id: "e12-11a",
      source: "12",
      target: "11a",
      arrowHeadType: "arrowclosed",
      type: "smoothstep",
    },
    {
      id: "e7-13",
      source: "7",
      target: "13",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e7-14",
      source: "7",
      target: "14",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e7-15",
      source: "7",
      target: "15",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e8-15",
      source: "8",
      target: "15",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e9-15",
      source: "9",
      target: "15",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e9-16",
      source: "9",
      target: "16",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e9-17",
      source: "9",
      target: "17",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e11-18",
      source: "11",
      target: "18",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e9-19",
      source: "9",
      target: "19",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e10-19",
      source: "10",
      target: "19",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e19a-20",
      source: "19a",
      target: "20",
      arrowHeadType: "arrowclosed",
      type: "smoothstep",
    },
    {
      id: "e20-19a",
      source: "20",
      target: "19a",
      arrowHeadType: "arrowclosed",
      type: "smoothstep",
    },
    {
      id: "e9-21",
      source: "9",
      target: "21",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e16-22",
      source: "16",
      target: "22",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e16-23",
      source: "16",
      target: "23",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e23-28",
      source: "22",
      target: "28",
    },
    {
      id: "e17-23",
      source: "17",
      target: "23",
      arrowHeadType: "arrowclosed",
    },
    {
      id: "e31",
      source: "1",
      target: "32",
      arrowHeadType: "arrowclosed",
    },
  ];
  
  export default elements;
