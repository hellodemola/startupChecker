import { useSelector } from "react-redux";
import useCallUrl from "./components/customHooks/useCallUrl";
import useTotalCheck from "./components/customHooks/useTotalCheck";
import PhaseComp from "./components/PhaseComp";

const Main = () => {
  const { startupTasks } = useSelector((state) => state.task);
  const { isCompleted } = useTotalCheck(startupTasks);
  const { quote } = useCallUrl(isCompleted);
  return (
    <div className='main-wrapper'>
      <div className='container'>
        <div id='title'>
          <h1> My Startup Progress </h1>
          <h3>{isCompleted ? 'Congratulations! All Set' : 'Keep building your hustle'}</h3>
          <i>{isCompleted && quote && quote}</i>
        </div>

        <div id='each-stage'>
          {startupTasks.map((each) => (
            <PhaseComp data={each} key={each?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
