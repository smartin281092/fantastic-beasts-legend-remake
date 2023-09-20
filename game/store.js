import { configureStore } from '@reduxjs/toolkit'
import timelineReducer from './timelineReducer'

export default configureStore({
  reducer: {
    counter: timelineReducer
  }
})