import { createSlice } from '@reduxjs/toolkit'

const versionlice = createSlice({
  name: 'version',
  initialState: [{ ID: '', Name: 'Todas' }],
  reducers: {
    setVersion(state, action) { return [...state, ...action.payload] },
    loadVersion(state, action) { return state }
  }
})

export const { actions, reducer } = versionlice

export const { setVersion, loadVersion } = actions

export default reducer
