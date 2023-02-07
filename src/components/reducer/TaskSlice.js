import { createSlice } from '@reduxjs/toolkit';
import { stageData } from '../../utilis/data';

const initialState = {
  startupTasks: JSON.parse(localStorage.getItem('stageData')) || stageData,
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
          localStorage.setItem('stageData', JSON.stringify(state.startupTasks))
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
              localStorage.setItem('stageData', JSON.stringify(state.startupTasks))
            }
            return task
          }
          )
        }
        return each
      }
      )
    },
    DeleteTask: (state, { payload }) => {
      const { stageId, taskId } = payload
      state.startupTasks = state.startupTasks.map(each => {
        if (each.id === stageId) {
          each.todo = each.todo.filter(task => task.id !== taskId)
          localStorage.setItem('stageData', JSON.stringify(state.startupTasks))
        }
        return each
      }
      )
    },
    ChangeProgress: (state, { payload }) => {
      const { stageId, isCompleted } = payload
      state.startupTasks = state.startupTasks.map(each => {
        if (each.id === stageId) {
          if (isCompleted && each.todo.filter((e) => e.status).length < each.todo.length) {
            each.status = 'In Progress'
            localStorage.setItem('stageData', JSON.stringify(state.startupTasks))
          }

            if (!isCompleted && each.todo.filter((e) => e.status).length < 1) {
              each.status = 'Not Started'
               localStorage.setItem('stageData', JSON.stringify(state.startupTasks))
            }

          if (!isCompleted && each.todo.filter((e) => e.status === true).length === 0) {
            each.status = 'Not Started'
             localStorage.setItem('stageData', JSON.stringify(state.startupTasks))
          }

            if (!isCompleted && each.todo.filter((e) => e.status).length < each.todo.length && each.todo.filter((e) => e.status).length > 0) {
              each.status = 'In Progress'
               localStorage.setItem('stageData', JSON.stringify(state.startupTasks))
          }

           if (isCompleted && each.todo.filter((e) => e.status).length === each.todo.length) {
             each.status = 'Completed'
              localStorage.setItem('stageData', JSON.stringify(state.startupTasks))
           }

          if (isCompleted && each.todo.filter((e) => e.status).length < each.todo.length) {
            each.status = 'In Progress'
             localStorage.setItem('stageData', JSON.stringify(state.startupTasks))
          }
        }
        return each
      }
      )
    }
  },
})

// Action creators are generated for each case reducer function
export const { AddNewTask, ChangeTaskStatus, ChangeProgress, DeleteTask } = taskSlice.actions

export default taskSlice.reducer
