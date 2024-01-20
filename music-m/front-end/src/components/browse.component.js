import React, { useEffect, useState } from "react";
import "../App.css";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ProductService from "../services/product.service";

const Browse = () => {
  const [products, setProducts] = useState([]);
  const { keyword } = useParams();

  // The products are somehow displayed more than once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.searchProducts(keyword);
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [keyword]);

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.slice(0, maxLength) + "...";
  };

  const formatCurrency = (amount) => {
    const currencyFormatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      currencyDisplay: "symbol",
    });

    return currencyFormatter.format(amount);
  };
  return (
    <>
      <h1 className="browsing">Browsing...</h1>
      <div className="browse-container">
        <div className="row">
          <div className="col-3">
            <Card style={{ width: "16rem" }} className="mb-3">
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{ height: "3rem" }}
                  className="d-flex align-items-center fw-bold fs-6 bg-dark text-light"
                >
                  Categories
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">Guitars</ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  Studio & Recording
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  Live Sound & Lighting
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  Software & Plug-ins
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">Bass</ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  Keyboards & Synthesizers
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  Drums & Percussions
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  Microphones
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  DJ / Electronic
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  Band & Orchestra
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  Accessories
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <Card style={{ width: "16rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{ height: "3rem" }}
                  className="d-flex align-items-center fw-bold fs-6 bg-dark text-light"
                >
                  Brands
                </ListGroup.Item>
                <ListGroup.Item className="cat-text">Akai</ListGroup.Item>
                <ListGroup.Item className="cat-text">Fender</ListGroup.Item>
                <ListGroup.Item className="cat-text">Marshall</ListGroup.Item>
                <ListGroup.Item className="cat-text">Roland</ListGroup.Item>
                <ListGroup.Item className="cat-text">Bass</ListGroup.Item>
                <ListGroup.Item className="cat-text">Yamaha</ListGroup.Item>
                <ListGroup.Item className="cat-text">
                  <Link to={"/brands"}>See All Brands</Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="col">
            <div className="product-container">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h6 className="ms-3 mb-0 fw-bold">
                  Search results for "{keyword}"
                </h6>
              </div>
              <div className="card-container row ms-2">
                {products.map((product, index) => (
                  <Card
                    key={`${product.id}-${index}`}
                    className="mb-4 col-lg-2 col-md-4 col-sm-6 mx-1"
                    style={{ width: "13rem" }}
                  >
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.name}
                      className="p-2"
                    />
                    <Card.Body className="px-0">
                      <Card.Title className="small card-title">
                        {truncateTitle(product.name, 20)}
                      </Card.Title>
                      <Card.Text className="fw-bold">
                        {formatCurrency(product.price)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
