import React from "react";
import Menubar from "./menubar";
import Slider from "./slider";
import CardsData from "./slides.json";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "../../../assets/img/product/2.png";
import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-navbar">
      <Container>
        <div className="zirve-topbar">
          <div>
            <img src={logo} alt="prefabrik ev" />
          </div>

          <div className="top-number">
            <a href="tel:05541385012">
              {" "}
              <BsFillTelephoneFill /> 0554 138 50 12{" "}
            </a>
          </div>
        </div>
      </Container>

      <div>
        <Navbar bg="primary">
          <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </div>

      <Container className="top-body">
        <Row className="mt-5 ">
          <Col lg={9}>
            <Slider />
          </Col>

          <Col lg={3}>
            <Row>
              <Col lg={12} className="right-image">
                {" "}
                <figure>
                  {" "}
                  <img
                    className="img-fluid"
                    src={require(`../../../assets/img/product/03819ee6-44ea-4a31-9601-a7cf58127cca.jpg`)}
                    alt=""
                  />{" "}
                  <figcaption className="figcaption">ilk resim</figcaption>{" "}
                </figure>{" "}
              </Col>
              <Col lg={12} className="right-image">
                {" "}
                <figure>
                  {" "}
                  <img
                    className="img-fluid"
                    src={require(`../../../assets/img/product/03819ee6-44ea-4a31-9601-a7cf58127cca.jpg`)}
                    alt=""
                  />{" "}
                  <figcaption className="figcaption">ikinci resim</figcaption>{" "}
                </figure>
              </Col>
              <Col lg={12} className="right-image">
                {" "}
                <figure>
                  {" "}
                  <img
                    className="img-fluid"
                    src={require(`../../../assets/img/product/03819ee6-44ea-4a31-9601-a7cf58127cca.jpg`)}
                    alt=""
                  />{" "}
                  <figcaption className="figcaption">üçüncü resim</figcaption>{" "}
                </figure>
              </Col>
            </Row>
          </Col>
        </Row>

        <Container className="mt-5 body-card">
        <Row > 
          {CardsData.map((card, i) => (
            
              <Col key={i} lg={3} className="card-map">
              <Card  >
                <Card.Img variant="top" src={require(`../../../assets/img/slider/${card.image}`) } className="img-fluid" />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                   {card.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
           
          ))}
           </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Header;
