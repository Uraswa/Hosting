import React,{Fragment} from 'react'
import './footer.sass'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {links,link} from "../Nav/nav";
import Link from "next/link";

const texts = [
    [],
    [
        new link('','Dedicated Servers'),
        new link('','VPS Servers'),
        new link('','Shared Hosting'),
        new link('','Colocation')
    ],[],[],
    [
        new link('','About Company'),
        new link('','Contact us')
    ],
    [
        new link('','',<a className="footer-contact" href='tel:+7800553535'>Call us: 8800553535</a>),
        new link('','',<a className="footer-contact" href='mailto://zanin.vowa2015@yandex.ru'>Email us: zanin.vowa2015@yandex.ru</a>)
    ]
];

export default () => {
    return (
        <Fragment>
            <section id="footer-nav">
                <Container>
                    <Row>
                        {links.map((v,i)=> {

                            return (
                                <Col key={'col'+i} sm={6} md={4} lg={2}>
                                    <ul>
                                        {[v,...texts[i]].map((value,index)=> {
                                            if (value.text) {
                                                return (
                                                    <Link key={index} href={value.href}>
                                                        <li className={index ? '' : 'footer-nav-title'}>
                                                            {value.content && value.content}
                                                            {value.text && <a>{value.text}</a>}
                                                        </li>
                                                    </Link>
                                                )
                                            }
                                            return (
                                                <li key={index}>
                                                    {value.content}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
            <section id="footer-owned" className="container d-sm-flex justify-content-between px-3 px-sm-0">
                <p>Design: <a href="https://we.do/" target="_blank"><strong>we.do</strong></a></p>
                <p>Copyright © <strong>2014 Digital landscape</strong></p>
            </section>
        </Fragment>
    )
}