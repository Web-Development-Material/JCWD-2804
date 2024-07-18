import DetailProduct from "@/components/DetailProduct";
import { ProductItem } from "@/api/api";

interface DetailProps {
  product: ProductItem | null;
  params: any;
}

const Details: React.FC<DetailProps> = ({ product }) => {
  return <DetailProduct product={product} />;
};

export default Details;
