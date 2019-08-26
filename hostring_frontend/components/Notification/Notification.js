import React from 'react'
import Link from "next/link";
import './Notification.sass'


export default ({children}) => {
    return (
        <div className="notification">
            <div className="container h-100 d-flex align-content-center">
                <div className="d-flex " style={{'alignItems':'center'}}>
                    <img height="24px"  src="/static/imgs/notification.png" alt=""/>
                    <p className="pl-3 mb-0 notification-text">
                        We have recently upgraded several services. Our servers are faster than ever
                        <Link href=''><a className="notification-link ml-1">Read full news story</a></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}