import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addProduct } from "../helper";
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    Avail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.Avail
    ) {
      alert("please fill all the details");
      return;
    }
    addProduct.push(product);
    alert("Product added Successfully !");
    setProduct({
      name: "",
      description: "",
      price: "",
      Avail: "",
    });
  };

  return (
    <>
      <Container>
        <div class="card">
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <Row className="my-3">
                <Col md={2}>
                  <label className="form-label" for="form3Example3">
                    Product Name :
                  </label>
                </Col>
                <Col md={5}>
                  <input
                    type="text"
                    id="form3Example3"
                    autoComplete="false"
                    className="form-control form-control-lg"
                    placeholder="Enter Product Name"
                    value={product.name}
                    onChange={(e) =>
                      setProduct((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }))
                    }
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col md={2}>
                  <label className="form-label" for="form3Example3">
                    Description :
                  </label>
                </Col>
                <Col md={5}>
                  <input
                    type="text"
                    id="form3Example3"
                    autoComplete="false"
                    className="form-control form-control-lg"
                    placeholder="Enter Product Description"
                    value={product.description}
                    onChange={(e) =>
                      setProduct((prevState) => ({
                        ...prevState,
                        description: e.target.value,
                      }))
                    }
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col md={2}>
                  <label className="form-label" for="form3Example3">
                    Price :
                  </label>
                </Col>
                <Col md={5}>
                  <input
                    type="text"
                    id="form3Example3"
                    autoComplete="false"
                    className="form-control form-control-lg"
                    placeholder="Enter Product Price"
                    value={product.price}
                    onChange={(e) =>
                      setProduct((prevState) => ({
                        ...prevState,
                        price: e.target.value,
                      }))
                    }
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col md={2}>
                  <label className="form-label" for="form3Example3">
                    Availabilty :
                  </label>
                </Col>
                <Col md={5}>
                  <input
                    type="text"
                    id="form3Example3"
                    autoComplete="false"
                    className="form-control form-control-lg"
                    placeholder="Enter Product Availabilty"
                    value={product.Avail}
                    onChange={(e) =>
                      setProduct((prevState) => ({
                        ...prevState,
                        Avail: e.target.value,
                      }))
                    }
                  />
                </Col>
              </Row>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                Add Product in Database
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddProduct;
