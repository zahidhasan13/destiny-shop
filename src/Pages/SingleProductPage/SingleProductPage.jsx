import React, { useContext, useState } from "react";
import useProducts from "../../Hook/useProducts";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SingleProduct from "../../Components/SingleProduct";
import { AuthContext } from "../../Provider/AuthProvider";

const SingleProductPage = () => {
  const { cart, setCart, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [products] = useProducts();
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const relatedProoducts = products.filter(
    (pd) => pd.category === product?.category
  );

  const addToCart = (product) => {
    let newCart = [];
    const exist = cart.find((c) => c.id === product.id);
    if (!user) {
      navigate("/login");
    } else if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
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
            <SingleProduct key={pd.id} product={pd}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
