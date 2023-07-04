import { configureStore } from '@reduxjs/toolkit'
import handleCart from './reducer/handleCart'
export default configureStore({
  reducer: {
    handleCart
  },
})