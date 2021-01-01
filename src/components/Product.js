import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link
          to={`https://abhishekshaw1007.github.io/BookFront/product/${product.book_id}`}
        >
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link
            to={`https://abhishekshaw1007.github.io/BookFront/product/${product.book_id}`}
          >
            <Card.Title as="div">
              <strong>{product.title}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              // color={`darkcyan`}
            />
          </Card.Text>
          <Card.Text as="h3">₹ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
