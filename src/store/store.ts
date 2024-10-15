// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit'

import taskReducer from "../features/add-task/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch