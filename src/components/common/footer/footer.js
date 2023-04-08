import React from 'react'
import "./footer.scss"
import logoFooter from "../../../assets/img/product/footerLogoSiyah.jpg"
import { Col, Container, Row } from 'react-bootstrap'
import {BsFillTelephoneFill, BsTwitter} from 'react-icons/bs'
import { AiFillInstagram, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
        <Row>
            <Col lg={3} md={6}> <img src={logoFooter} alt="footer logo" className='img-fluid' /></Col>
            <Col lg={3} md={6}>
                <h2>Kimiz Biz</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nihil possimus magni voluptates a vero architecto sed alias omnis ullam, ipsam fugit ipsum aut, odit laboriosam eaque voluptatum nesciunt repellendus? </p>
            </Col>
            <Col lg={3} md={6}> 
               <h2>İletişim</h2>
               <ul>
               <a href="tel:0554 138 50 12"> <li><BsFillTelephoneFill/> 0554 138 50 12 </li> </a>
               <a href="https://instagram.com/ilhanmansiz41?igshid=OGRjNzg3M2Y=">  <li><AiFillInstagram/>  </li></a>
                <li><BsTwitter/></li>
                <li><AiOutlineMail/></li>
               </ul>
            </Col>
            <Col lg={3} md={6}>
                 <h2>Adresimiz</h2>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate quaerat, quas, placeat ad architecto at quidem porro earum odit, officiis ut necessitatibus dolore libero. Sit suscipit vitae quis ducimus.</p>
                 <iframe src="" frameborder="0"></iframe>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Footer
