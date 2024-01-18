import React from "react";

const CartItem = ({ product }) => {
  const { name, price, img, quantity } = product;
  return (
    <div className="flex justify-between items-center mb-5 border-2 p-2">
      <div className="flex space-x-2">
        <img src={img} alt="Product Image" className="w-24" />
        <div>
          <p className="font-bold">{name}</p>
          <p>
            Price:{" "}
            <span className="text-lg text-orange-600 font-bold">${price}</span>
          </p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <button className="btn bg-red-400">Delete</button>
    </div>
  );
};

export default CartItem;
