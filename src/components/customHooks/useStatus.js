import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChangeTaskStatus, ChangeProgress } from '../reducer/TaskSlice';

const useStatus = ({ goal, id }) => {
  const { id: goalId, status } = goal;
   const [isCompleted, setIsCompleted] = useState(status);

  const dispatch = useDispatch();

  const handleCheck = () => {
    setIsCompleted(!isCompleted);
  }

  useEffect(() => {
    dispatch(ChangeTaskStatus({ stageId: id, taskId: goalId, isCompleted }));
    dispatch(ChangeProgress({ stageId: id, isCompleted }));
  }, [isCompleted]);


  return { isCompleted, handleCheck };
};

export default useStatus;