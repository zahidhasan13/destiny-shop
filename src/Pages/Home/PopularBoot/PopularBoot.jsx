import useProducts from "../../../Hook/useProducts";

const PopularBoot = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div className="max-w-screen-xl mx-auto">
      {products.map((pd) => (
        <p key={pd.id}>{pd.category}</p>
      ))}
    </div>
  );
};

export default PopularBoot;
