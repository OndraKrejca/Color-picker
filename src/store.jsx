import { configureStore } from '@reduxjs/toolkit'
import colorReducer from './features/color_picker/colorReducer'

const store = configureStore({
  reducer: {
    colorCart: colorReducer,
  },
})

export default store
