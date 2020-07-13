import { createSlice } from '@reduxjs/toolkit'

const charcatersSlice = createSlice({
  name: 'CHARACTERS',
  initialState: [],
  reducers: {
    setCharacters (state, action) { return [...state, ...action.payload] },
    cleanCharacters () { return [] },
    loadCharacters (state, action) { return state }
  }
})

export const { actions, reducer } = charcatersSlice

export const { setCharacters, loadCharacters, cleanCharacters } = actions

export default reducer
