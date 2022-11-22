import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart-slice";
import productsReducer from "./feature/products-slice";
import categoriesReducer from "./feature/categories-slice";
import checkoutReducer from "./feature/checkout-slice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        categories: categoriesReducer,
        checkout: checkoutReducer
    }
});