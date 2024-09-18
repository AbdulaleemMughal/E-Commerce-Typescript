import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { fetchAllProducts } from "../Typescript/Function";
import { HomeProducts } from "../Typescript/Home.Interface";
import ItemCards from "../components/ItemCards";
import Shimmer from "../components/Shimmer";

const Home = () => {

  const [product, setProduct] = useState<HomeProducts[] | null>(null);
  console.log(product?.length)

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetchAllProducts(
      "https://fakestoreapi.com/products"
    );
    setProduct(response);
  };

  return (
    <div style={{ backgroundColor: "#fffffe" }}>
      <Container>
        <div className="text-center pt-3">
          <h2>Featured Products</h2>
          <p>The Purpose of Lorem Ipsum</p>
        </div>
        <div className="text-center">
          <Row xs={1} sm={2} md={3} lg={4}>
          {!product ? (
              <Shimmer />
            ) : product.length === 0 ? (
              <p>No products available</p> // Optional: show a message if there are no products
            ) : (
              <ItemCards product={product} iconStyle={{ fontSize: "20px" }} />
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
