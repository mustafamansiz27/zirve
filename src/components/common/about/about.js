import React from 'react'
import logo from "../../../assets/img/product/2.png";
import aboutResim from "../../../assets/img/product/03819ee6-44ea-4a31-9601-a7cf58127cca.jpg"
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import "./about.scss"

const About = () => {
  return (
    <div className='contact-page'>
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
              <Nav.Link href="#link">Galeri</Nav.Link>
              <Nav.Link href="#link">Yapı Malzemeleri</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
      </div>

         <Container className='about-body'>
            <Row>
          <Col lg={6} className='text mt-5 ' >
             <p>
                   Daha fazla kaliteli ürün ve insan odaklı tasarım ile en üst seviyede kullanıcı memnuniyetini gözeterek müşterilerimize sunmak ve prefabrik yapılar alanında ismimize ve kalitemize uygun biçimde Gaziantep'de lider, hedeflediğimiz dünya pazarlarında müşteri beklentileri ile bölge şartlarına en uygun ürün ve hizmetleri sağlayan global firma olmak şirket politikamızı oluşturmaktadır.
            </p>
         </Col>
            <Col lg={6}>
                <img src={require(`../../../assets/img/product/0aa0ee14-5e8c-4244-a15c-266c8e5e33a0.jpg`)} alt="prefabrik ev" className='img-fluid  mt-5' />
            </Col>
            <Col lg={6}>
                <img src={aboutResim} alt="" className='img-fluid mt-5' />
            </Col>
            <Col lg={6}>
                <p className='mt-5'>
                    
          konteynerler uzmanlık alanımız,şirketimiz 
          
           yüksek kalite panel ve tasarımlı konteyner modelleri ve isteğinize uygun çözümler sunmakta ve
           Dünya standartlarındaki üretimini sağlamlık ve insan odaklı bir anlayışla, yerel ihtiyaçlara göre şekillendirerek, tüketici dostu Prefabrik ve Konteyner çözümleriyle, önceliği Türkiye olmak üzere tüm dünyaya Gaziantep'ten hizmet vermektedir.
                </p>
            </Col>
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

export default About
