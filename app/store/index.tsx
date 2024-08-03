import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from '../features/navbarSlice'

export const store = configureStore({
  reducer: {
        navbarSlice: navbarSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch