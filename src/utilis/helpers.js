export const generateToken = () => (Math.random() * 100000).toFixed(0)

// handle status styling color className
export const handleStatusStyleName = (status) => { 
  switch (status) {
    case 'Not Started':
      return 'phase-cirle'
    case 'In Progress':
      return 'phase-cirle-black'
    case 'Completed':
      return 'phase-cirle-green'
    default:
      return 'phase-cirle'
  }
}

// check if the previous stage is completed
export const isTaskCompletedinPreviousStage = (startupTasks, id) => { 
   const previousStage = startupTasks.filter((stage) => stage.id < id);
    const isCompleted = previousStage.filter((stage) => stage.todo.filter((task) => task.status).length < stage.todo.filter((task) => task).length);
    return isCompleted.length > 0;
}