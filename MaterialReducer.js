import { createSlice } from '@reduxjs/toolkit'

export const materialSlice = createSlice({
  name: 'material',
  initialState: {
    product: []
  },
  reducers: {
    getMaterial: (state, action) => {
      state.material.pusg({ ...action.payload })
    }
  }
})

export const { getMaterial } = materialSlice.actions
export default materialSlice.reducer
