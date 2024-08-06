import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from '../features/navbarSlice'
import cartSlice from '../features/cartSlice'

export const store = configureStore({
  reducer: {
        navbarSlice: navbarSlice,
        cartSlice : cartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch