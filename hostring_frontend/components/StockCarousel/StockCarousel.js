import React,{useState} from 'react';
import './stockcarousel.sass'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccentBtn from "../AccentBtn/AccentBtn";


export default function StockCarousel() {



    return (
        <section id="stock-carousel">
            <div className='w-100 h-100'>
            <div className="container">
                <Row className="carousel-slide">
                    <Col md={6} className="carousel-info">
                        <h1>Dedicated servers</h1>
                        <h3>Starting from 99usd</h3>
                        <p className="w-75">24x7 knowledgeable support
                            Full Root access
                            1 IP included with each server (more on request w/ justification)
                            Your Choice of any OS (CentOS, Windows, Debian, Fedora)
                            FREE Reboots
                        </p>
                    </Col>
                    <Col md={6} className="carousel-contacts pl-md-5">

                        <p className="mb-0"><span className="contact-action">Call us: </span>
                            <a href="tel:+7800553535" className="contact-credential">8 (800) 553535</a>
                        </p>
                        <p className="mb-5"><span className="contact-action">E-mail us: </span>
                            <a href="mailto:zanin.vowa2015@yandex.ru" className="contact-credential">zanin.vowa2015@yandex.ru</a>
                        </p>

                        <AccentBtn  text="Compare our pricing plans"/>
                    </Col>
                 </Row>
            </div>
            <div id="server-img"  className="d-flex flex-column align-items-center">
                <img  src="/static/imgs/server.png" alt="" />

            </div>
            </div>
            <div id='test'>
                <div id='test2'>
                    3123
                </div>
            </div>

        </section>
    );
}