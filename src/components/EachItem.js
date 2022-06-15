import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProgress, ChangeTaskStatus } from './reducer/TaskSlice';

const EachItem = ({ goal, id }) => {
  const { id: goalId,name, status } = goal;
  const [isCompleted, setIsCompleted] = useState(status);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsCompleted(!isCompleted);
  }

  useEffect(() => {
    dispatch(ChangeTaskStatus({ stageId: id, taskId: goalId, isCompleted }));
    dispatch(changeProgress({ stageId: id, isCompleted }));
  }
    , [isCompleted]);


  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted} 
        onChange={handleClick}
      />
      <label>{name}</label>
    </div>
  );
};

export default EachItem;