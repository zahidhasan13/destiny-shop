import SingleProduct from "../../../Components/SingleProduct";
import useProducts from "../../../Hook/useProducts";

const PopularBoot = () => {
  const [products] = useProducts();
  const popular = products.filter(
    (product) => product.category === "Men's Boot"
  );
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h3 className="uppercase font-semibold text-3xl text-center border-b-2 border-black mx-80">
        popular mens boot
      </h3>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {popular.slice(1, 5).map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default PopularBoot;
