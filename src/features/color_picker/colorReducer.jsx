import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alert: { type: false, msg: '' },
  errors: true,
  colorInfo: { color: '', hue: 0 },
}

const colorReducer = createSlice({
  name: 'colorCart',
  initialState,
  reducers: {
    saveColor: (state, { payload }) => {
      return {
        ...state,
        colorInfo: payload,
        errors: false,
      }
    },
    changeAlert: (state, { payload }) => {
      const { type, msg } = payload

      return {
        ...state,
        alert: { type: type, msg: msg },
      }
    },
  },
})

export const { saveColor, changeAlert } = colorReducer.actions

export default colorReducer.reducer
