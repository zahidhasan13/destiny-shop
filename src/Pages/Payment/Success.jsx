import React from "react";
import { Link, useParams } from "react-router-dom";

const Success = () => {
  const { tranId } = useParams();
  return (
    <div className="text-center my-10">
      <p className="text-green-600">
        Your payment is Successfull. TxID: {tranId}
      </p>
      <p className="text-green-600">Thank for your order</p>
      <Link to="/">
        <button className="bg-orange-600 py-2 px-4 text-white font-bold rounded-md hover:text-orange-900 mb-2 mt-5">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Success;
