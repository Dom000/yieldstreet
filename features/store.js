import { configureStore } from '@reduxjs/toolkit'
import  yieldStreetSliceReducer from '../features/yieldstreetslice'

export const store = configureStore({
  reducer: {
    counter:yieldStreetSliceReducer,
  },
})