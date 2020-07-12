import { createSlice } from '@reduxjs/toolkit'

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: [{ ID: '', Name: 'Todas' }],
  reducers: {
    setVehicless(state, action) { return [...state, ...action.payload] },
    loadVehicles(state, action) { return state }
  }
})

export const { actions, reducer } = vehiclesSlice

export const { setVehicless, loadVehicles } = actions

export default reducer
