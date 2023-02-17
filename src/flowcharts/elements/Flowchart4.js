const elements = [
  {
    id: "1",
    data: { label: "CSC 126", Desc:"Intro to Computer Science"},
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
    data: { label: "200 level elective*",Desc:"200 level Elective" },
    position: { x: window.innerWidth / 2 + 0, y: 300 },
  },
  {
    id: "3",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 211", Desc:"Intermediate Programming"},
    position: { x: window.innerWidth / 2 - 350, y: 120 },
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
    data: { label: "MTH 231 or MTH 230", Desc:"Calc I or Calc I with PreCalc"},
    position: { x: window.innerWidth / 2 - 650, y: 120 },
  },
  {
    id: "5a",
    style: {
      backgroundColor: "white",
    },
    data: { label: "MTH 231 or MTH 230",Desc:"Calc I or Calc I with PreCalc" },
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
    data: { label: "MTH 229", Desc:"Calculus Lab"},
    position: { x: window.innerWidth / 2 - 900, y: 120 },
  },
  {
    id: "7",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC or MTH 228", Desc:"Discrete Math" },
    position: { x: window.innerWidth / 2 - 400, y: 220 },
  },
  {
    id: "8",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 326", Desc:"Data Structures"  },
    position: { x: window.innerWidth / 2 - 200, y: 220 },
  },
  {
    id: "9",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 220", Desc:"Computer Networking and Security"  },
    targetPosition: "left",
    position: { x: window.innerWidth / 2 + 100, y: 70 },
  },
  {
    id: "10",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 330", Desc:"Object Oriented Software Design"  },
    targetPosition: "top",
    position: { x: window.innerWidth / 2 - 250, y: 320 },
  },
  {
    id: "11",
    style: {
      backgroundColor: "white",
    },
    selectable: false,
    data: { label: "CSC 332", Desc:"Operating Systems I"  },
    targetPosition: "top",
    position: { x: window.innerWidth / 2 + 200, y: 300 },
  },
  {
    id: "11a",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 332",Desc:"Operating Systems I" },
    targetPosition: "right",
    position: { x: window.innerWidth / 2 + 200, y: 300 },
  },
  {
    id: "12",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 305",Desc:"Operating Systems Programming Laboratory" },
    sourcePosition : "left",
    position: { x: window.innerWidth / 2 + 450 , y: 300 },
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
    id: "note2",
    type: "output",
    data: {
      label: "CSC 332 & 305 OR (2) 200-level CSC electives",
      Desc: "Operating Systems I & Operating Systems Programming Laboratory OR (2) 200-level CSC electives"
    },
    selectable: false,
    targetPosition: "bottom",
    sourcePosition: "bottom",
    style: {
      backgroundColor: "white",
    },
    position: { x: window.innerWidth / 2 + 150, y: 380 },
  },
  {
    id: "note3",
    type: "output",
    data: {
      label: "OR",
      Desc:"OR"
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
    data: { label: "MTH 125", Desc:"College Algebra and Trigonometry with Intermediate Algebra Review(MQ)(STEM)" },
    targetPosition: "right",
    sourcePosition: "right",
    style: {
      backgroundColor: "white",
    },
    position: { x: window.innerWidth / 2 - 950, y: 20 },
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
    id: "e3-7",
    source: "3",
    target: "7",
    arrowHeadType: "arrowclosed",
    type: "smooth",
  },
  {
    id: "e3-8",
    source: "3",
    target: "8",
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e1-9",
    source: "1",
    target: "9",
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e8-10",
    source: "8",
    target: "10",
    arrowHeadType: "arrowclosed",
  },
  {
    id: "e9-11",
    source: "9",
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
];

export default elements;
