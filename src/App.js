import "./App.css";
import { useState, useEffect } from "react";
import ReactFlow, { MiniMap, Background } from "react-flow-renderer";
import elements from "./elements";
import elementsMobile from "./elementsMobile";
import useWindowDimensions from "./useWindowDimensions";
import { Typography } from "@mui/material";

const style = {
  width: "97%",
  height: "70vh",
};

function App() {
  const [elements_flow, setElements] = useState([]);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width < 768) {
      setElements(elementsMobile);
    } else {
      setElements(elements);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Typography variant="h4">CSI Computer Science Flowchart</Typography>
      <Typography variant="h6">
        - The flowchart is based on the official CS curriculum at CSI.
      </Typography>
      <Typography variant="h6">
        - You can drag the flowchart using your mouse to view all of classes,
        especially when you are on the phone!
      </Typography>
      <Typography variant="h6">
        - You can also click on any of the classes to view the prerequisites.
      </Typography>
      <Typography variant="h6">
        - By clicking on the class, you can also view the description of the
        class.
      </Typography>
      <ReactFlow
        preventScrolling={false}
        style={style}
        arrowHeadColor="black"
        paneMoveable={true}
        nodesConnectable={false}
        minZoom={1}
        maxZoom={1}
        elementsSelectable={false}
        nodesDraggable={false}
        elements={elements_flow}
      >
        <MiniMap />
        <Background />
      </ReactFlow>
      <Typography className="description" variant="h6">
        ~ depending on your grade in MTH 123, you may take MTH 130 next, or MTH
        230 in place of MTH 231. <br></br>* 8-10 CSC elective credits; this
        consists of either two 400-electives = 8 credits, or one 400-elective
        and two 200-electives = 10 credits. You may sub. one additional
        upper-level MTH course (beyond the two that you will take after MTH 232)
        for one 400-elective. This is limited to one instance. <br></br> # after
        MTH 232, you complete two upper level MTH courses, which have MTH 232 or
        higher as a prerequisite (excluding MTH 306). See your advisor for
        recommendations, though you may choose the courses. <br></br>**
        pre-requisites are senior class standing, CSC 330 and ENG 151. You must
        earn a minimum “C” or higher grade in CSC courses which are
        pre-requisites to other CSC courses If your major catalog year is
        2017-18 or earlier, please reference that flowchart.
      </Typography>
    </div>
  );
}

export default App;
