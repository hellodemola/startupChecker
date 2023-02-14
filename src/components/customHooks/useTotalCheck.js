import { useEffect, useState } from "react";

const useTotalCheck = (tasks) => {
  const [isCompleted, setIsCompleted] = useState();
  const taskDoneNum = tasks.filter((each) => each.status === 'Completed').length
  const totalTasks = tasks?.length

  useEffect(() => {
    if (taskDoneNum === totalTasks) {
     return setIsCompleted(true)
    }
     return setIsCompleted(false)
  }, [taskDoneNum, totalTasks, tasks])

  return { isCompleted }
};

export default useTotalCheck;
