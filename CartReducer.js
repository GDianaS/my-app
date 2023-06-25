import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(item => item.id === action.payload.id)
      if (itemPresent) {
        console.log('Já Adicionado')
      } else {
        state.cart.push({ ...action.payload })
      }
    },

    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        item => item.id !== action.payload.id
      )
      state.cart = removeItem
    }
  }
})

export const { addToCart, removeFromCart } = CartSlice.actions

export default CartSlice.reducer
