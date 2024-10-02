import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Gift } from "../../types/gift"

interface InitialState {
   gift: Gift[]
}

const initialState: InitialState = {
   gift: []
}

export const giftSlice = createSlice({
   name: 'giftState',
   initialState,
   reducers: {
      setGifts: (state, action: PayloadAction<Gift[]>) => {
         state.gift = action.payload
      
      },
      resetGift: (state) => {
         state.gift = []
      }
   }
})

export const { setGifts, resetGift } = giftSlice.actions
export default giftSlice.reducer