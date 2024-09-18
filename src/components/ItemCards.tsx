import { useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { addItems } from "../utils/FavouriteSlice";
import { useDispatch } from "react-redux";
import { HomeProducts } from "../Typescript/Home.Interface";
import { addToCart } from "../utils/CartSlice";

type ItemCardProps = {
    product: HomeProducts[] | null;
    iconStyle: React.CSSProperties;
};

const ItemCards = ({ product, iconStyle }: ItemCardProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [isExpandTitle, setIsExpandTitle] = useState<boolean>(false);

  const dispatch = useDispatch();
  return (
    <>
      {product?.map((p) => {
        const fullDescription = p.description;
        const fullTitle = p.title;
        const halfDescription = fullDescription.substring(0, 50) + "...";
        const halfTitle = fullTitle.substring(0, 15) + "...";

        const handleDesc = () => {
          setIsExpand(!isExpand);
        };

        const handleTitle = () => {
          setIsExpandTitle(!isExpandTitle);
        };

        return (
          <Card key={p.id} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={p.image} style={{ height: "18rem" }} />
            <Card.Body>
              <Card.Title>
                {isExpandTitle ? fullTitle : halfTitle}
                <span
                  style={{ fontSize: "15px", marginLeft: "5px" }}
                  className="text-primary"
                  onClick={handleTitle}
                >
                  {isExpandTitle ? "Show less" : "Show more"}
                </span>
              </Card.Title>
              <Card.Text>
                {isExpand ? fullDescription : halfDescription}
                <span
                  style={{ fontSize: "15px", marginLeft: "5px" }}
                  className="text-primary"
                  onClick={handleDesc}
                >
                  {isExpand ? "Show less" : "Show more"}
                </span>
              </Card.Text>
              <Row>
                <Button variant="outline-primary">Buy Now</Button>
                <Button
                  variant="outline-danger"
                  className="my-3"
                  onClick={() => dispatch(addItems(p))}
                >
                  <FaRegHeart style={iconStyle} /> Add To favorites
                </Button>
                <Button variant="outline-secondary" onClick={() => dispatch(addToCart(p))}>
                  <FiShoppingCart style={iconStyle} /> Add To Cart
                </Button>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default ItemCards;
