import { useEffect, useState } from "react";
import { fetchAllProducts } from "../Typescript/Function";
import { HomeProducts } from "../Typescript/Home.Interface";
import ItemCards from "../components/ItemCards";
import Shimmer from "../components/Shimmer";
import { Row, Container } from "react-bootstrap";
import { Spin } from "antd";

const MenClothing = () => {
  const [menProduct, setMenProduct] = useState<HomeProducts[]>([]);

  useEffect(() => {
    fetchJewellary();
  }, []);

  const fetchJewellary = async () => {
    const response = await fetchAllProducts(
      `https://fakestoreapi.com/products/category/${encodeURIComponent(
        "men's clothing"
      )}`
    );
    setMenProduct(response);
  };

  return (
    <div>
      <h1 className="text-center">Men's Clothing Products</h1>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {!menProduct ? (
            <Shimmer />
          ) : menProduct.length === 0 ? (
            <div className="text-center">
              <Spin size="large" />
            </div>
          ) : (
            <ItemCards product={menProduct} iconStyle={{ fontSize: "20px" }} />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default MenClothing;
