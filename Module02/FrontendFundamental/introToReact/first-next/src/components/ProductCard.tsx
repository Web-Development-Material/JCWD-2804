"use client";
import { FC } from "react";
// import Image from "next/image";
import { ProductCardProps } from "@/utils/interface";

const ProductCard: FC<ProductCardProps> = ({
  name,
  description,
  price,
  onDetailClick,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      {/* <Image
        className="w-full"
        src={image}
        alt={name}
        width={300}
        height={300}
      /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="text-lg font-semibold mt-2">${price.toFixed(2)}</div>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={onDetailClick}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
