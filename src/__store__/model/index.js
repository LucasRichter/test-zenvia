import { createSlice } from '@reduxjs/toolkit'

const modelSlice = createSlice({
  name: 'models',
  initialState: [{ ID: '', Name: 'Todos' }],
  reducers: {
    setModels(state, action) { return [...state, ...action.payload] },
    loadModels(state, action) { return state }
  }
})

export const { actions, reducer } = modelSlice

export const { setModels, loadModels } = actions

export default reducer
