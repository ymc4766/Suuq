import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singleSuuqDetails } from "../actions/suuqActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const SuuqDetScreen = ({ match, history }) => {
  const suuqId = match.params.id;

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const suuqDetails = useSelector((state) => state.suuqDetails);
  const { suuq, loading, error } = suuqDetails;

  useEffect(() => {
    dispatch(singleSuuqDetails(suuqId));
  }, [dispatch, suuqId]);

  const addToCartHandler = () => {
    history.push(`/cart/${suuqId}?qty=${qty}`);
  };

  return (
    <div className="ml2">
      <h1 className="pa1">
        <Link to="/som/suuq">Go Back</Link>
      </h1>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <Row>
        <Col md={3}>
          <Image src={suuq.image} alt={suuq.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3 className="blue">{suuq.itemType}</h3>
              <h3>{suuq.name}</h3>
              <p>{suuq.description}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Address : {suuq.address}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>$ {suuq.price}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} className="ml4">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price : </Col>
                  <Col>$ {suuq.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status : </Col>
                  <Col>${suuq.stock > 0 ? " in Stock" : "out of Stock"}</Col>
                </Row>
              </ListGroup.Item>

              {suuq.stock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty : </Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(suuq.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  disabled={suuq.stock === 0}
                  className="btn block w-100 bg-dark"
                  type="button"
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SuuqDetScreen;
