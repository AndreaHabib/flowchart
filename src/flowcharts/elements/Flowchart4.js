const elements = [
  {
    id: "1",
    data: { label: "CSC 126" },
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
    data: { label: "200 level elective*" },
    position: { x: window.innerWidth / 2 - 400, y: 120 },
  },
  {
    id: "3",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 211" },
    position: { x: window.innerWidth / 2 - 100, y: 120 },
  },
  {
    id: "4",
    style: {
      backgroundColor: "white",
    },
    data: { label: "MTH 123 ~" },
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
    data: { label: "MTH 231 or MTH 230" },
    position: { x: window.innerWidth / 2 - 650, y: 120 },
  },
  {
    id: "5a",
    style: {
      backgroundColor: "white",
    },
    data: { label: "MTH 231 or MTH 230" },
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
    data: { label: "MTH 229" },
    position: { x: window.innerWidth / 2 - 900, y: 120 },
  },
  {
    id: "7",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC or MTH 228" },
    position: { x: window.innerWidth / 2 - 400, y: 220 },
  },
  {
    id: "8",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 326" },
    position: { x: window.innerWidth / 2, y: 220 },
  },
  {
    id: "9",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 220" },
    targetPosition: "left",
    position: { x: window.innerWidth / 2 + 150, y: 70 },
  },
  {
    id: "10",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 330" },
    targetPosition: "top",
    position: { x: window.innerWidth / 2 - 100, y: 380 },
  },
  {
    id: "11",
    style: {
      backgroundColor: "white",
    },
    selectable: false,
    data: { label: "CSC 332" },
    targetPosition: "top",
    position: { x: window.innerWidth / 2 + 350, y: 420 },
  },
  {
    id: "11a",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 332" },
    targetPosition: "right",
    position: { x: window.innerWidth / 2 + 350, y: 420 },
  },
  {
    id: "12",
    style: {
      backgroundColor: "white",
    },
    data: { label: "CSC 305" },
    targetPosition: "left",
    position: { x: window.innerWidth / 2 + 600, y: 420 },
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
