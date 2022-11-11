import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addToCart(state, action) {
            console.log(action);
            state.value.push(action.payload);
        }
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;