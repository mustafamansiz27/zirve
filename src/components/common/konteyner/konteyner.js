import React from 'react'
import "./konteyner.scss"
import logo from "../../../assets/img/product/2.png";
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import CardsData from "../header/slides.json";
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Konteyner = () => {
  return (
    <div className='konteyner-page'>
         <div className="header-navbar">
        <div className="gradiant">
      <Container className="gradiant-container">
      <Row className="zirve-topbar">
        <Col> <a href="">  <img src={logo} alt="prefabrik ev" /> </a></Col>
       
        <Col className="top-number">
          <a href="tel:05541385012">
              {" "}
              <BsFillTelephoneFill /> 0554 138 50 12{" "}
          </a>
          
            </Col>  
       </Row>
      </Container>
      </div>

        <Navbar  className="navbar-streach fixed-top" expand="lg"  >
          <Container>
            <Navbar.Brand href="#home">Hayalleriniz Burada</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end ">
              <Nav.Link as={Link} to="/">Ana Sayfa</Nav.Link>
              <Nav.Link as={Link} to="/about">Hakkımızda</Nav.Link>
              <Nav.Link as={Link} to="/contact" >İletişim</Nav.Link>
              <Nav.Link as={Link}  to="/konteyner" >Konteyner</Nav.Link>
              <Nav.Link href="#link">Yapı Malzemeleri</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
      </div>

      <Container className="mt-5 konteyner-card">
        <Row > 
          {CardsData.map((card, i) => (
            
              <Col key={i} lg={3} className="konteyner-map">
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



      <div className="footer">
          <Row>
            <Col lg={3}>
             <h2> KURUMSAL</h2>
             
             <p>
             İdeal Prefabrik üretimine ilk olarak prefabrike konutlar, ofis binaları, deprem evleri ve hafif çelik yapılar ile başlamıştır…
             </p>
            </Col>
            <Col lg={3}>
              <h2>İLETİŞİM</h2>
              <p>Türkiyenin Her Yerinden;</p>
              <p className="number"> <a href="tel:05541385012 ">  <BsFillTelephoneFill/>  0554 138 50 12</a>  </p>
              <p><GrMail/>  info@zirveprefabrilkonteyner.com</p>
              
              </Col>
            <Col lg={3}>
              
              <h2>ADRES</h2>
             
              <p>Sanayi Mahallesi 60098 Nolu Cad No 36  Şehitkamil/Gaziantep</p>
              </Col>
            <Col lg={3}>
             
             <h2>HAKKIMIZDA</h2> 
             <p>ZİRVE PREFABRİK KONTEYNER, çok yönlü gelişen ve hızlı değişen günümüz dünyasında, Prefabrik ve Konteyner Sektöründe yeniliklere açık kişisel ve/veya kurumsal ihtiyaçlara cevap verebilen esnek yapısı ile müşteri memnuniyeti odaklı bir üretim yapmaktadır. </p>
              </Col>
              <a href={`https://wa.me/05541385012`} target="_blank" >
                <FaWhatsapp size={32} color="green" className="whatsUp" />
               </a>

          </Row>
        </div>

     
    </div>
  )
}

export default Konteyner
