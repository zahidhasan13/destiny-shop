import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import CartItem from "../../Components/CartItem";

const Cart = () => {
  const { cart } = useContext(AuthContext);

  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    quantity = quantity + product.quantity;
  }
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <p>Total Cart: {quantity}</p>
          {cart.map((product) => (
            <CartItem key={product.id} product={product}></CartItem>
          ))}
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Cart;
