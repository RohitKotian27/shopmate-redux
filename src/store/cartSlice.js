import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action) {
            const updatedList = state.cartList.concat(action.payload);
            const cartTotal = state.total + action.payload.price;
            return { ...state, total: cartTotal, cartList: updatedList };
        },
        remove(state, action) {
            const updatedList = state.cartList.filter((elem) => elem.id !== action.payload.id);
            const cartTotal = state.total - action.payload.price;
            return { ...state, total: cartTotal, cartList: updatedList };
        }
    }
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer; 