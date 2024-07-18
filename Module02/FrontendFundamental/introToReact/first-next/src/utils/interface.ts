import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ProductCardProps {
  image?: any;
  name: string;
  description: string;
  price: number;
  onDetailClick?: () => void;
}
