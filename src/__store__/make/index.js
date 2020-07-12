import { createSlice } from '@reduxjs/toolkit'

const makeSlice = createSlice({
  name: 'makes',
  initialState: [{ ID: '', Name: 'Todas' }],
  reducers: {
    setMakes(state, action) { return [...state, ...action.payload] },
    loadMakes(state, action) { return state }
  }
})

export const { actions, reducer } = makeSlice

export const { setMakes, loadMakes } = actions

export default reducer
