import React from "react";
import classes from "./ItemsPage.module.css";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
}

const ItemsPage: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean | unknown>(false);
  const [products, setProducts] = React.useState<ProductProps[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.log(`err: ${err}`);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading Products...</p>;
  }

  if (error) {
    return <p>Failed to fetch products. Please try reloading the webpage.</p>;
  }

  return (
    <section>
      <article className={classes.myArticles}>
        {products.map((product) => (
          <Link to={`/${product.id}`} className={classes.container} key={product.id}>
            <img
              className={classes.img}
              src={product.image}
              alt={product.title}
            />
            <hr className={classes.myHr} />
            <div className="padding-top: 1rem">
              <p>{`$${product.price}`}</p>
              <strong>{product.title}</strong>
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default ItemsPage;
