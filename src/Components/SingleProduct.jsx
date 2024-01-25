import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { name, img, price, ratings, _id } = product;
  return (
    <Link to={`/productDetails/${_id}`}>
      <div className="p-2 border-2 space-y-2">
        <img src={img} alt="Product Image" />
        <p className="text-xl font-semibold">{name}</p>
        <p>
          Price:{" "}
          <span className="text-lg text-orange-600 font-bold">${price}</span>
        </p>
        <p className="flex">
          <span>Rating: </span>
          <Rating style={{ maxWidth: 100 }} value={product?.ratings} readOnly />
        </p>
      </div>
    </Link>
  );
};

export default SingleProduct;
