import React from "react";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div className="text-center my-10">
      <p className="text-red-600">Payment Failed</p>
      <Link to="/">
        <button className="bg-orange-600 py-2 px-4 text-white font-bold rounded-md hover:text-orange-900 mb-2 mt-5">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default PaymentFail;
