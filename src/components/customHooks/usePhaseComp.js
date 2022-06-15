import { useEffect, useState } from 'react';

const usePhaseComp = (goals) => {
  const [isTasksCompleted, setTaskCompleted] = useState();
  const countTodoStatusLength = goals?.todo?.filter((task) => task.status).length
  const countEachTodo = goals?.todo?.length

  useEffect(() => {
        if (countTodoStatusLength < countEachTodo && countTodoStatusLength !== 0) {
     setTaskCompleted('In Progress')
  }
  
  if (countTodoStatusLength < countEachTodo && countTodoStatusLength === 0) {
     setTaskCompleted('Not Started')
  }
  
  if (countTodoStatusLength === countEachTodo) {
     setTaskCompleted('Completed')
  }
    
    if (countTodoStatusLength === 0) {
    setTaskCompleted('Not Started')
  }
  }, [goals, countEachTodo, countTodoStatusLength])


  return {isTasksCompleted}
};

export default usePhaseComp;