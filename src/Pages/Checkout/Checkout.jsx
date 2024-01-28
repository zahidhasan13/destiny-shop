import React, { useContext } from "react";
import useCart from "../../Hook/useCart";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [cart] = useCart();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  let totalPrice = 0;
  let totalShipping = 0;
  let cartQuantity = [];
  for (const ct of cart) {
    cartQuantity.push(ct.quantity);

    totalPrice = totalPrice + ct.price * ct.quantity;
    totalShipping = totalShipping + ct.shipping;
  }
  const totalQuantity = cartQuantity.reduce((sum, item) => item + sum, 0);

  const tax = (totalPrice * 2) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  // Submit Data
  const onSubmit = (data) => {
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="col-span-3 border-2 p-2">
        <h3 className="text-2xl font-bold border-b-2 text-center">
          Delivery Information
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
          <div className="grid lg:grid-cols-2 gap-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Name</span>
              </div>
              <input
                type="text"
                {...register("name", { required: true, maxLength: 80 })}
                placeholder="Type your name"
                className="input input-bordered w-full  input-sm"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold">Email</span>
              </div>
              <input
                type="email"
                {...register("email", { required: true, maxLength: 80 })}
                value={user?.email}
                placeholder="Type your email"
                className="input input-bordered w-full input-sm"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Phone</span>
              </div>
              <input
                type="text"
                {...register("phone", { required: true, maxLength: 80 })}
                placeholder="Type your phone number"
                className="input input-bordered w-full  input-sm"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Address</span>
              </div>
              <input
                type="text"
                {...register("address", { required: true, maxLength: 80 })}
                placeholder="Type your address"
                className="input input-bordered w-full  input-sm"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Products Total</span>
              </div>
              <input
                type="text"
                {...register("productTotal", { required: true, maxLength: 80 })}
                value={totalPrice}
                placeholder="Type here"
                className="input input-bordered w-full  input-sm"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Delevery fee</span>
              </div>
              <input
                type="text"
                {...register("deliveryFee", { required: true, maxLength: 80 })}
                value={totalShipping}
                placeholder="Type here"
                className="input input-bordered w-full  input-sm"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Tax</span>
              </div>
              <input
                type="text"
                {...register("tax", { required: true, maxLength: 80 })}
                value={tax}
                placeholder="Type here"
                className="input input-bordered w-full  input-sm"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Total Payment</span>
              </div>
              <input
                type="text"
                {...register("totalPayment", { required: true, maxLength: 80 })}
                value={grandTotal}
                placeholder="Type here"
                className="input input-bordered w-full  input-sm"
              />
            </label>
          </div>
          <button className="bg-orange-600 py-2 px-4 text-white font-bold rounded-md hover:text-orange-900 mb-2 w-full mt-5">
            Proceed to checkout ({totalQuantity})
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
