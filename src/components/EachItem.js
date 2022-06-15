import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProgress, ChangeTaskStatus } from './reducer/TaskSlice';

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
    dispatch(changeProgress({ stageId: id, isCompleted }));
  }
    , [isCompleted]);
  
  const isTaskCompletedinPreviousStage = () => {
    const previousStage = startupTasks.filter((stage) => stage.id < id);
    const isCompleted = previousStage.filter((stage) => stage.todo.filter((task) => task.status).length < stage.todo.filter((task) => task).length);
    return isCompleted.length > 0;
  }


  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted} 
        onChange={handleClick}
        disabled={isTaskCompletedinPreviousStage()}
      />
      <label>{name}</label>
    </div>
  );
};

export default EachItem;