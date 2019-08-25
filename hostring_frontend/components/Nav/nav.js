import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import './nav.sass'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { useRouter } from 'next/router'


export class link{
    constructor(href,text,content){
        this.href = href;
        this.text = text;
        this.content = content;
    }
}

export const links = [
        new link('/','Home'),
        new link('/services','Plans and Services'),
        new link('/infrastructure','Infrastructure'),
        new link('/news','News'),
        new link('/about','About'),
        new link('/support',<Button variant="light" className="support-btn">Support</Button>)
];

const Header = () => {
    const {pathname} = useRouter();
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
                                            {v.text}
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
