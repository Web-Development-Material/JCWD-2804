import { getProductById, ProductItem } from "@/api/api";
import { GetStaticProps } from "next";

interface DetailProps {
  product: ProductItem | null;
}

const DetailProduct = ({ product }: DetailProps) => {
  console.log("product : ", product?.price);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="bg-white text-black w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-2">
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
        <p>Price : {product?.price}</p>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps<DetailProps> = async ({
  params,
}) => {
  const id = params?.id as string | undefined;
  if (!id) {
    throw new Error("Missing id parameter");
  }

  const product = await getProductById(id);

  return { props: { product }, revalidate: 3 };
};

export default DetailProduct;
