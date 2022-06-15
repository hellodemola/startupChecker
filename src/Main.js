import { useSelector } from "react-redux";
import PhaseComp from "./components/PhaseComp";

const Main = () => { 
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