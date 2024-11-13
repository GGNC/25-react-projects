import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addToCard : (state,action)=>{
            state.push(action?.payload);
        },
        removeFromCard : (state,action)=>{
            return state.filter(item => item?.id !== action.payload);
        },
    }
})

export const {addToCard , removeFromCard} = cartSlice.actions;
export default cartSlice.reducer;