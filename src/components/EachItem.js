import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteIcon } from './icons/deleteIcon';
import { ChangeProgress, ChangeTaskStatus, DeleteTask } from './reducer/TaskSlice';

const EachItem = ({ goal, id }) => {
  const { id: goalId,name, status } = goal;
  const [isCompleted, setIsCompleted] = useState(status);
  const dispatch = useDispatch();
  const { startupTasks } = useSelector((state) => state.task);

  const handleClick = () => {
    setIsCompleted(!isCompleted);
  }

  useEffect(() => {
    dispatch(ChangeTaskStatus({ stageId: id, taskId: goalId, isCompleted }));
    dispatch(ChangeProgress({ stageId: id, isCompleted }));
  }
    , [isCompleted]);
  
  const isTaskCompletedinPreviousStage = () => {
    const previousStage = startupTasks.filter((stage) => stage.id < id);
    const isCompleted = previousStage.filter((stage) => stage.todo.filter((task) => task.status).length < stage.todo.filter((task) => task).length);
    return isCompleted.length > 0;
  }
  

  const handleDelete = () => {
    dispatch(DeleteTask({ stageId: id, taskId: goalId }));
  }




  return (
    <div className='each-task' >
      <div className='row'>
        <div className='col' id="each-task">
      <input
        type="checkbox"
        checked={isCompleted} 
        onChange={handleClick}
        disabled={isTaskCompletedinPreviousStage()}
      />
          <label>{name}</label>
        </div>
        <div className='col' id="delete-icon">
        <span onClick={handleDelete}>{DeleteIcon}</span>
        </div>
        </div>
    </div>
  );
};

export default EachItem;