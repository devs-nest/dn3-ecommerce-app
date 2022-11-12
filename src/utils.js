export function getItemCount(cartItems) {
    return cartItems.reduce((count, cartItem) => cartItem.quantity + count, 0);
}

export function getSubtotal(cartItem) {
    return cartItem.reduce((sum, { product, quantity }) => product.price * quantity + sum, 0)
}