import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: "products",
    queryFn: async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
      );
      return res.json();
    },
  });
  return [products];
};

export default useProducts;
