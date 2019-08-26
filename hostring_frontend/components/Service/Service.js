import React from 'react'
import AccentBtn from "../AccentBtn/AccentBtn";
import './Service.sass'


export default (props) => {
    const [dollars,cents] = props.price.split('.');
    return (
        <div className="service d-flex flex-column " >
            <h5 className="service-title">{props.title}</h5>
            <p className="service-price-from">from</p>
            <div className="d-flex service-price">
                <h4 className="mt-1">$</h4>
                <p><h1>{dollars}</h1></p>
                <div>
                    <h4 className="mb-0 mt-1" >{cents}</h4>
                    <p className="service-price-month" ><small>/month</small></p>
                </div>
            </div>

            <ul className="service-info-list">
                {props.info.map((v,i) => v)}
            </ul>

            <AccentBtn text="Order now"/>
        </div>
    )
}