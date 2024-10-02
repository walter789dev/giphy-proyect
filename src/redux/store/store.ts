import { configureStore } from '@reduxjs/toolkit'
import giftSlice from '../slices/gift'

export const store = configureStore({
   reducer: {
      giftReduce: giftSlice
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch