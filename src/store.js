import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from './components/reducer/TaskSlice'

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
})