const SingleProduct = ({ product }) => {
  const { name, img, price, ratings } = product;
  return (
    <div className="p-2 border-2 space-y-2">
      <img src={img} alt="" />
      <p className="text-xl font-semibold">{name}</p>
      <p>
        Price:{" "}
        <span className="text-lg text-orange-600 font-bold">${price}</span>
      </p>
      <p>Rating: {ratings}/5</p>
    </div>
  );
};

export default SingleProduct;
