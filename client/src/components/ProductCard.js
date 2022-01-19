import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <>
      <Card className="my-3 p-2 ">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            variant="top"
            src={product.images[0]}
            alt={product.name}
          ></Card.Img>
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <h4>{product.name}</h4>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <div className="my-3 pb.4">
              <Rating
                value={product.ratings}
                text={` ${product.numOfReviews} reviews`}
              />
            </div>
          </Card.Text>
          <Card.Text as="h3"> $ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
