import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import './nav.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { useRouter } from 'next/router'


const Header = () => {
    const {pathname} = useRouter();
    const links = [
        {
            href:'/',
            text:'Home'
        },
        {
            href:'/services',
            text:'Plans and Services'
        },
        {
            href:'/infrastructure',
            text:'Infrastructure'
        },
        {
            href:'/news',
            text:'News'
        },
        {
            href:'/about',
            text:'About'
        },
        {
            href:'/support',
            content: <Button variant="light" className="support-btn">Support</Button>
        },
    ];
    return (
        <Navbar expand="lg" className="container main-nav">
               <Link href="/">
                  <Navbar.Brand >
                      <div className="brand"/>
                  </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="d-flex justify-content-between w-100 navigation" >
                        {links.map((v) => {
                            return (
                                <Link key={v.href} href={v.href}>
                                    <li className={pathname === v.href ? 'active' : ''}>
                                        <a >
                                            {v.text || v.content}
                                        </a>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
              </Navbar.Collapse>
        </Navbar>
    )
};


export default Header
