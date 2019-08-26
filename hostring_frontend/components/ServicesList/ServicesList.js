import React from 'react';
import './servicelist.sass'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Service from "../Service/Service";


class service {
    constructor(title,price,info){
        this.title = title;
        this.price = price;
        this.info = info;
    }
}

const services = [
    new service('Dedicated Servers','99.00',[
        <li><strong>1 TB </strong> Hard Drive</li>,
        <li><strong>8GB </strong> ECC DDR3</li>,
        <li><strong>4000 GB </strong> Transfer</li>,
        <li><strong>100 Mbps </strong> Uplink</li>,
    ]),
    new service('Dedicated Servers','99.00',[
        <li><strong>1 TB </strong> Hard Drive</li>,
        <li><strong>8GB </strong> ECC DDR3</li>,
        <li><strong>4000 GB </strong> Transfer</li>,
        <li><strong>100 Mbps </strong> Uplink</li>,
    ]),
    new service('Dedicated Servers','99.00',[
        <li><strong>1 TB </strong> Hard Drive</li>,
        <li><strong>8GB </strong> ECC DDR3</li>,
        <li><strong>4000 GB </strong> Transfer</li>,
        <li><strong>100 Mbps </strong> Uplink</li>,
    ]),
    new service('Dedicated Servers','99.00',[
        <li><strong>1 TB </strong> Hard Drive</li>,
        <li><strong>8GB </strong> ECC DDR3</li>,
        <li><strong>4000 GB </strong> Transfer</li>,
        <li><strong>100 Mbps </strong> Uplink</li>,
    ])
];

export default () => {
    return (
        <section className="service-list">
            <div className="container">
                <h2 className="text-center mb-5">Grow your business with <strong>Digital Landscape</strong></h2>
                <Row>
                   {services.map((v,i)=> {
                        return (
                            <Col className="mb-2" sm={6} xl={3}>
                                <Service {...v}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </section>
    )
}