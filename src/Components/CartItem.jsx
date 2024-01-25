import React from "react";
import useCart from "../Hook/useCart";

const CartItem = ({ product }) => {
  const { name, price, img, quantity } = product;
  const [, refetch] = useCart();

  const handleDelete = (product) => {
    fetch(`http://localhost:5000/carts/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        confirm("Are you sure you want to delete this product?");
      });
  };
  return (
    <div className="flex justify-between items-center mb-5 border-b-2 p-2">
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
      <button onClick={() => handleDelete(product)} className="btn bg-red-400">
        Delete
      </button>
    </div>
  );
};

export default CartItem;
