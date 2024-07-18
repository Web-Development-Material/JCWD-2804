"use client";

import { useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { ProductItem } from "@/api/api";

interface ProductListProps {
  products: ProductItem[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-3 gap-5">
      {products?.map((item: ProductItem, index: any) => (
        <ProductCard
          key={index}
          name={item?.name}
          image={item?.image}
          description={item?.description}
          price={item?.price}
          onDetailClick={() => router.push(`/details/${item?.id}`)}
        />
      ))}
    </div>
  );
};

export default ProductList;
