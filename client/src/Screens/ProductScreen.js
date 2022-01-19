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

import { singleProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(singleProductDetails(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div className="pa3">
      <h1 className="pa2">
        <Link to="/">Go Back</Link>
      </h1>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <Row>
        <Col md={3}>
          <Image src={product.images} alt={product.name} />
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>$ {product.price}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} className="ml4">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price : </Col>
                  <Col>$ {product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status : </Col>
                  <Col>${product.stock > 0 ? " in Stock" : "out of Stock"}</Col>
                </Row>
              </ListGroup.Item>

              {product.stock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty : </Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.stock).keys()].map((x) => (
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
                  disabled={product.stock === 0}
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

export default ProductScreen;
