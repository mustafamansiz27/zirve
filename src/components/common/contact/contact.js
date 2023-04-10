import React from 'react'
import logo from "../../../assets/img/product/2.png";
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact-page'>
         <div className="header-navbar">
        
        <Container>
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
  
          <Navbar  className="navbar-streach" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Hayalleriniz Burada</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="justify-content-end ">
                <Nav.Link as={Link} to="/">Ana Sayfa</Nav.Link>
                <Nav.Link as={Link} to="/about">Hakkımızda</Nav.Link>
                <Nav.Link as={Link} to="/contact">İletişim</Nav.Link>
                <Nav.Link href="#link">Galeri</Nav.Link>
                <Nav.Link href="#link">Yapı Malzemeleri</Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

       <Container className='contact-inform'>  
         
         <Row>
            <Col lg={6} > 
             <h2>İLETİŞİM BİLGİLERİ</h2>
             <img src={require(`../../../assets/img/product/14988b91-153b-4e80-a6f1-545d1633fc61.jpg`)} alt="" />
             <p>SANAYİ MAHALLESİ 60098 NOLU CAD NO 36  Şehitkamil/Gaziantep</p>
             <p>info@zirveprefabrilkonteyner.com</p>
             <p>5457567567</p>
            </Col>
            <Col lg={6} >
                
                

            </Col>
         </Row>

       </Container>

        <div className="mb-5">
      <iframe
        title="adress"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3178.938975598737!2d37.38342232815863!3d37.177921189681044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDEwJzQwLjUiTiAzN8KwMjMnMTYuNSJF!5e0!3m2!1str!2str!4v1681116137836!5m2!1str!2str"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
          </div>

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
             
              <p>Sanayi Mahallesi 60098 Nolu Cad No 36 Şehitkamil/Gaziantep</p>
              </Col>
            <Col lg={3}>
             
             <h2>HAKKIMIZDA</h2> 
             <p>ZİRVE PREFABRİK KONTEYNER, çok yönlü gelişen ve hızlı değişen günümüz dünyasında, Prefabrik ve Konteyner Sektöründe yeniliklere açık kişisel ve/veya kurumsal ihtiyaçlara cevap verebilen esnek yapısı ile müşteri memnuniyeti odaklı bir üretim yapmaktadır. </p>
              </Col>
              <a href={`https://wa.me/05541385012`} target="_blank" >
                <FaWhatsapp size={32} color="green"  className="whatsUp" />
               </a>

          </Row>
        </div>
      
    </div>
  )
}

export default Contact
