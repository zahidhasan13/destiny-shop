import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { name, img, price, ratings, id } = product;
  return (
    <Link to={`/productDetails/${id}`}>
      <div className="p-2 border-2 space-y-2">
        <img src={img} alt="Product Image" />
        <p className="text-xl font-semibold">{name}</p>
        <p>
          Price:{" "}
          <span className="text-lg text-orange-600 font-bold">${price}</span>
        </p>
        <p>Rating: {ratings}/5</p>
      </div>
    </Link>
  );
};

export default SingleProduct;
