import Image from "next/image";
import { type TProduct } from "./types";

type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, images } = product;
  return (
    <div>
      <div className="images">
        {images.map((image, i) => (
          <Image key={id + i} src={image} alt={title} />
        ))}
      </div>
      <h6>{title}</h6>
    </div>
  );
};

export default ProductCard;
