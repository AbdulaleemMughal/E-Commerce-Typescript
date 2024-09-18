import { useEffect, useState } from "react";
import { fetchAllProducts } from "../Typescript/Function";
import { HomeProducts } from "../Typescript/Home.Interface";
import ItemCards from "../components/ItemCards";
import Shimmer from "../components/Shimmer";
import { Row, Container } from "react-bootstrap";
import { Spin } from "antd";

const Jewellary = () => {
  const [jewellaryProduct, setJewellaryProduct] = useState<HomeProducts[]>([]);

  useEffect(() => {
    fetchJewellary();
  }, []);

  const fetchJewellary = async () => {
    const response = await fetchAllProducts(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    console.log(response);
    setJewellaryProduct(response);
  };

  return (
    <div>
      <h1 className="text-center">Jewellary Products</h1>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {!jewellaryProduct ? (
            <Shimmer />
          ) : jewellaryProduct.length === 0 ? (
            <div className="text-center">
              <Spin size="large" />
            </div>
          ) : (
            <ItemCards
              product={jewellaryProduct}
              iconStyle={{ fontSize: "20px" }}
            />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Jewellary;
