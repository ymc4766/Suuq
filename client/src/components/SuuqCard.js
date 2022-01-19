import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const SuuqCard = ({ suuq }) => {
  //   const { image, title, description, price, address } = guryo;

  return (
    <div className="my-3 p-2 shadow-2 pointer ">
      <Card>
        <Link to={`/suuq/${suuq._id}`}>
          <Card.Img
            variant="top"
            src={suuq.image}
            alt={suuq.name}
            className="grow"
            fluid
          />
        </Link>

        <Card.Body>
          <Link to={`suuq/${suuq._id}}`}>
            <h3>{suuq.title}</h3>
            <h4> About this {suuq.itemType}</h4>
          </Link>
        </Card.Body>
        <Card.Text as="h4">
          <p className="f4">Address : {suuq.address}</p>
        </Card.Text>
        <Card.Text as="div" className="mb1">
          <Rating value={suuq.rating} text={` ${suuq.numOfReviews} reivews`} />
          {/* <h2>seller :{suuq.seller}</h2> */}
        </Card.Text>
        <Card.Text as="h3">${suuq.price}</Card.Text>
      </Card>
    </div>
  );
};

export default SuuqCard;
