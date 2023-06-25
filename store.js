import { configureStore } from '@reduxjs/toolkit'

import CartReducer from './CartReducer'
import MaterialReducer from './MaterialReducer'

export default configureStore({
  reducer: {
    cart: CartReducer,
    material: MaterialReducer
  }
})
