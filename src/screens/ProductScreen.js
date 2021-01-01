import React from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./../components/Rating";
import products from "./../products";
import { PropTypes } from "prop-types";

// added git again...

const ProductScreen = ({ match }) => {
  const product = products.find((e) => e.book_id === match.params.id);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={product.image} alt={product.title} fluid />
            </ListGroup.Item>
            <ListGroup.Item>
              {<h2>{`Product details`}</h2>}
              <Row>
                <Col>
                  <span className="desc_title">Author : </span>
                  <span>{product.author}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="desc_title">Genre : </span>
                  <span>{product.genre}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="desc_title">Language : </span>
                  <span>{product.language}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="desc_title">Paperback : </span>
                  <span>{`${product.numOfPages} pages`}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="desc_title">ISBN : </span>
                  <span>{product.ISBN}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="desc_title">Weight : </span>
                  <span>{product.weight}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="desc_title">Dimensions : </span>
                  <span>{product.dimensions}</span>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  <h3>{product.title}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>{`by ${product.author}`}</h5>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`   ${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 className="price_block">₹ {product.price}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₹{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

ProductScreen.propTypes = {
  match: PropTypes.any,
};

export default ProductScreen;
