import { useEffect } from "react";
import { useSelector } from "react-redux";
import PhaseComp from "./components/PhaseComp";
import { stageData } from "./utilis/data";

const Main = () => { 
  useEffect(() => {
    localStorage.setItem("stageData", JSON.stringify(stageData));
  }, [])
  const { startupTasks } = useSelector((state) => state.task);
  return (
    <div id="main-wrapper" className="main-wrapper">
      <div className="container">
        <div id="title">
          <h1> My Startup Progress </h1>
        </div>

        <div id="each-stage">
          {startupTasks.map(each => (
          <PhaseComp data={each} key={each?.id} />
          ))}
        </div>
      </div>
    </div>
  )
  
}

export default Main;