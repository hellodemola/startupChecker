import { useSelector } from "react-redux";
import { isTaskCompletedinPreviousStage } from "../utilis/helpers";
import useDeleteItems from "./customHooks/useDeleteItems";
import useChangeStatus from "./customHooks/useChangeStatus";
import { DeleteIcon } from "./icons/deleteIcon";

const EachItem = ({ goal, id }) => {
  const { id: goalId, name } = goal;
  const { startupTasks } = useSelector((state) => state.task);
  const { handleCheck, isCompleted } = useChangeStatus({ goal, id });
  const { handleDelete } = useDeleteItems({ stageId: id, taskId: goalId });

  return (
    <div className='each-task'>
      <div className='row'>
        <div className='col' id='each-task'>
          <input
            type='checkbox'
            checked={isCompleted}
            onChange={handleCheck}
            disabled={isTaskCompletedinPreviousStage(startupTasks, id)} 
          />
          <label>{name}</label>
        </div>
        <div className='col' id='delete-icon'>
          <span onClick={handleDelete}>{DeleteIcon}</span>
        </div>
      </div>
    </div>
  );
};

export default EachItem;
