import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/API/apiSlice'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    count: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})