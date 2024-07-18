import { getProducts } from "@/api/api";
import { ProductItem } from "@/api/api";
import ProductList from "@/components/ProductList";

const ProductsPageServer = async () => {
  const products: ProductItem[] = await getProducts();

  return (
    <main className="w-screen h-full bg-white flex justify-center items-center">
      <ProductList products={products} />
    </main>
  );
};

export default ProductsPageServer;
