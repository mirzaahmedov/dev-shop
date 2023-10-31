import { type TProduct } from "./types";
import ProductCard from "./ProductCard";
import styles from "./styles.module.css";

const products: TProduct[] = [
  {
    id: "1",
    title: "Samsung",
    images: [],
  },
  {
    id: "2",
    title: "Artel",
    images: [],
  },
  {
    id: "3",
    title: "Apple",
    images: [],
  },
];

const Products = () => {
  return (
    <div className={styles.products__grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
