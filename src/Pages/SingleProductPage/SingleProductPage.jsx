import React, { useContext, useState } from "react";
import useProducts from "../../Hook/useProducts";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SingleProduct from "../../Components/SingleProduct";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../Hook/useCart";

const SingleProductPage = () => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const [products] = useProducts();
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const relatedProoducts = products.filter(
    (pd) => pd.category === product?.category
  );

  const addToCart = (product) => {
    if (user && user?.email) {
      const cartItem = {
        productId: product?._id,
        name: product?.name,
        price: product?.price,
        img: product?.img,
        quantity: product?.quantity,
        shipping: product?.shipping,
        email: user?.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            alert("Add to cart successfully");
          }
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <img src={product?.img} alt="Product img" />
        </div>
        <div>
          <h3 className="text-4xl font-bold">{product?.name}</h3>
          <p className="flex">
            <Rating
              style={{ maxWidth: 100 }}
              value={product?.ratings}
              readOnly
            />{" "}
            ({product?.ratingsCount})
          </p>
          <p className="my-10">
            Price:{" "}
            <span className="text-2xl text-orange-600 font-bold">
              ${product?.price}
            </span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-orange-600 py-2 px-4 text-white font-bold rounded-md hover:text-orange-900 mb-2"
          >
            Add To Cart
          </button>
          <p>
            <span className="font-bold">Category:</span> {product?.category}
          </p>
          <p>
            <span className="font-bold">Stock:</span> {product?.stock}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-2xl border-b-2 border-black pb-2">Related Product</p>
        <div className="grid grid-cols-4 gap-5 mt-5">
          {relatedProoducts.slice(4, 8).map((pd) => (
            <SingleProduct key={pd._id} product={pd}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
