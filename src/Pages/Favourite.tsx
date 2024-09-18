import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { Container, Row, Button } from "react-bootstrap";
import ItemCards from "../components/ItemCards";
import { clearItems } from "../utils/FavouriteSlice";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Favourite = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store: RootState) => store.favourite.items);

    console.log(store);

  return (
    <>
      <div className="text-center pt-3">
        <div className="d-flex justify-content-between">
        <h1>Your Favourite Products</h1>
        <Button variant="outline-secondary" onClick={() => dispatch(clearItems())}>Clear Cart</Button>
        </div>
        {
          store.length === 0 && (
            <div className="text-center">
              <h3>No items in your cart</h3>
              <Button variant="outline-primary" onClick={() => navigate('/')}><FaPlus />Add Products</Button>
            </div>
          )
        }
        <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
            <ItemCards product={store} iconStyle={{ fontSize: "20px" }} />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Favourite;
