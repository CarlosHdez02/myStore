import { useParams } from "react-router-dom";
import React from "react";
import { ProductProps } from "./ItemsPage";
import classes from "./ItemsDetail.module.css";

const ItemsDetail: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [product, setProduct] = React.useState<ProductProps | null>(null);
  const [error, setError] = React.useState<boolean | unknown>(false);

  const { id } = useParams();
  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading products</p>;
  }
  if (error) {
    return <p>Error while fetching, try again</p>;
  }
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <section className={classes.container}>
        <img
          className={classes.img}
          src={product?.image}
          alt={product?.title}
        />
        <div className={classes.productInfo}>
          <p>{product?.title}</p>
          <p>{`$${product.price}`}</p>
          <button className={classes.myButton}>Comprar</button>
        </div>

       
      </section>
      <div className={classes.productDetail}>
      <h1>Descripcion del producto</h1>
        <p>{product?.description}</p>
      </div>
      
    </>
  );
};
export default ItemsDetail;
