

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cart-slice'
// import dummyReducer from './slice/dummy-slice'


const store = configureStore({
  reducer : {
    cart: cartReducer,
    // dummy : dummyReducer,
  }
})

export default store;