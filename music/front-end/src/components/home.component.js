import React, { useEffect, useState } from "react";
import Nord from "../assets/Nord88.webp";
import Guitar from "../assets/Guitar.jpeg";
import Daddario from "../assets/daddario-xs-web.jpeg";
import "../App.css";
import ProductService from "../services/product.service";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const newProductsRes = await ProductService.newProducts();
        const featuredProductsRes = await ProductService.allProducts();

        setNewProducts(newProductsRes.data);
        setFeaturedProducts(featuredProductsRes.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
    <div>
      <section id="home">
        <div
          id="carouselFade"
          className="carousel slide carousel-fade mt-4 mb-4"
        >
          <div className="carousel-inner">
            <div className="carousel-item d-flex justify-content-center">
              <img
                src={Nord}
                className="d-block carousel-image img-fluid"
                alt="Nord"
              />
            </div>
            <div className="carousel-item active d-flex justify-content-center">
              <img
                src={Guitar}
                className="d-block carousel-image img-fluid"
                alt="Guitar"
              />
            </div>
            <div className="carousel-item d-flex justify-content-center">
              <img
                src={Daddario}
                className="d-block carousel-image img-fluid"
                alt="Daddario string"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn btn-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn btn-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="product-container">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h1 className="ms-3 mb-0 fw-bold">Featured</h1>
            <Button variant="dark" className="me-4">
              See All
            </Button>
          </div>
          <div className="card-container row ms-2">
            {featuredProducts.slice(0, 6).map((product) => (
              <Card
                key={product.id}
                className="mb-4 col-lg-2 col-md-4 col-sm-6 mx-1"
                style={{ width: "12.5rem" }}
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
        <div className="product-container">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h1 className="ms-3 mb-0 fw-bold">New Products</h1>
            <Button variant="dark" className="me-4">
              See All
            </Button>
          </div>
          <div className="card-container row ms-2">
            {newProducts.slice(0, 6).map((product) => (
              <Card
                key={product.id}
                className="mb-4 col-lg-2 col-md-4 col-sm-6 mx-1"
                style={{ width: "12.5rem" }}
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
      </section>
    </div>
  );
};

export default Home;
