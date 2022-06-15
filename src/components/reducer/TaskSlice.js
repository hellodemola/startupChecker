import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startupTasks: JSON.parse(localStorage.getItem('stageData')),
}

export const taskSlice = createSlice({
  name: 'startupTasks',
  initialState,
  reducers: {
    // add to a task to a stage
    AddNewTask: (state, { payload }) => {
      const { stageId, task } = payload
      state.startupTasks = state.startupTasks.map(each => {
        if (each.id === stageId) {
          each.todo.unshift(task)
        }
        return each
      }
      )
    },
    ChangeTaskStatus: (state, { payload }) => { 
      const { stageId, taskId, isCompleted } = payload
      state.startupTasks = state.startupTasks.map(each => {
        if (each.id === stageId) {
          each.todo = each.todo.map(task => {
            if (task.id === taskId) {
              task.status = isCompleted
            }
            return task
          }
          )
        }
        return each
      }
      )
    },
    changeProgress: (state, { payload }) => { 
      const { stageId, isCompleted } = payload
      state.startupTasks = state.startupTasks.map(each => {
        if (each.id === stageId) {
          if (isCompleted && each.todo.filter((e) => e.status).length < each.todo.length) { 
           each.status = 'In Progress'
          }

            if (!isCompleted && each.todo.filter((e) => e.status).length < 1) { 
           each.status = 'Not Started'
            }
          
          if (!isCompleted && each.todo.filter((e) => e.status === true).length === 0) {
            each.status = 'Not Started'
          }

            if (!isCompleted && each.todo.filter((e) => e.status).length < each.todo.length && each.todo.filter((e) => e.status).length > 0) {
            each.status = 'In Progress'
          }

           if (isCompleted && each.todo.filter((e) => e.status).length === each.todo.length) {
            each.status = 'Completed'
          }
        }
        return each
      }
      )
    }
  },
})

// Action creators are generated for each case reducer function
export const { AddNewTask, ChangeTaskStatus, changeProgress } = taskSlice.actions

export default taskSlice.reducer