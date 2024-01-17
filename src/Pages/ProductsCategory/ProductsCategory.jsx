import React from "react";
import useProducts from "../../Hook/useProducts";
import SingleProduct from "../../Components/SingleProduct";

const ProductsCategory = ({ category }) => {
  const [products] = useProducts();
  const categoryProducts = products.filter((pd) => pd.category === category);
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h3 className="uppercase font-semibold text-3xl text-center border-b-2 border-black mx-80">
        {category}: {categoryProducts.length}
      </h3>
      <div className="grid grid-cols-5 gap-5 mt-10">
        {categoryProducts.map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
