import React from 'react'
import { useDispatch } from 'react-redux'

import { removeFromCart } from '../../store/slice/cart-slice'

export default function CartTile({cartItem}) {

  const dispatch = useDispatch()

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id))
  }
  return (
    <div>
      <div className="flex items-center justify-between p-5 bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
           <img 
            src={cartItem?.image} 
            alt={cartItem?.title}
            className='h-24 rounded-lg'
           />
           <div className="ml-10 self-start space-y-5">
            <h1 className='text-xl text-white font-bold'>{cartItem?.title}</h1>
            <p className>{cartItem.price}$</p>
           </div>
        </div>
        <div>
         <button 
             onClick={handleRemoveFromCart } 
             className='bg-red-950 text-white border-2 rounded-lg font-bold p-4'>
             Remove from cart
          </button>
       </div>
      </div>
    
    </div>
  )
}
