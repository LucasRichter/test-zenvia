import { createSlice } from '@reduxjs/toolkit'

const apiSlice = createSlice({
  name: 'API',
  initialState: {},
  reducers: {
    setApi (state, { payload }) { return { ...state, [payload.key]: payload.value } }
  }
})

export const { actions, reducer } = apiSlice

export const { setApi } = actions

export default reducer
