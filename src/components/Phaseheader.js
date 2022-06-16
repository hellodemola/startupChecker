import { handleStatusStyleName } from "../utilis/helpers";
import usePhaseComp from "./customHooks/usePhaseComp";

const PhaseHeader = ({ data }) => {
  const { isTasksCompleted } = usePhaseComp(data)
  return (
    <div className='phase-header'>
      <div>
        <h2>
          {data?.id}. {data?.name}
        </h2>
      </div>
      <div className='phase-status'>
        <div className={handleStatusStyleName(isTasksCompleted)} />
        <p>{isTasksCompleted}</p>
      </div>
    </div>
  )
}

export default PhaseHeader;
