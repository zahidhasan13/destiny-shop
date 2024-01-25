import React from "react";
import CartItem from "../../Components/CartItem";
import useCart from "../../Hook/useCart";

const Cart = () => {
  const [cart] = useCart();
  console.log(cart);

  let quantity = 0;
  let totalPrice = 0;
  let totalShipping = 120;
  for (const ct of cart) {
    ct.quantity = ct.quantity || 1;
    quantity = ct + ct.quantity;
    totalPrice = totalPrice + ct.price * ct.quantity;
    totalShipping = totalShipping + ct.shipping;
  }

  const tax = (totalPrice * 2) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 border-2 p-2">
          <div>
            {cart.length > 0 ? (
              <div>
                {cart.map((product) => (
                  <CartItem key={product._id} product={product}></CartItem>
                ))}
              </div>
            ) : (
              <p className="text-4xl text-center">Cart is Empty</p>
            )}
          </div>
        </div>
        <div className="col-span-1 border-2 p-2 space-y-4">
          <p className="text-xl font-bold">Total Product: {cart.length}</p>
          <p className="font-semibold">Total Amount: {totalPrice}</p>
          <p className="font-semibold">Shipping: {totalShipping}</p>
          <p className="font-semibold">Tax: {tax}</p>
          <p className="font-semibold">Grand Total: {grandTotal}</p>
          <button className="bg-orange-600 py-2 px-4 text-white font-bold rounded-md hover:text-orange-900 mb-2 w-full">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
