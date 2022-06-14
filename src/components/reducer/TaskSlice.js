import { createSlice } from '@reduxjs/toolkit'
import { stageData } from '../../utilis/data'

const initialState = {
  startupTasks: stageData,
}

export const taskSlice = createSlice({
  name: 'startupTasks',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    // add to a task to a stage
    AddNewTask: (state, { payload }) => {
      const { stageId, task } = payload
      debugger
      state.startupTasks = state.startupTasks.map(each => {
        if (each.id === stageId) {
          each.todo.push(task)
        }
        return each
      }
)},
    // add task to a list 
    AddNewStage: (state, action) => {
      const { stage } = action.payload
      state.startupTasks.push(stage)
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, AddNewTask } = taskSlice.actions

export default taskSlice.reducer