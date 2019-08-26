import React from 'react'
import Link from "next/link";
import './accentbtn.sass'


export default (props) => (
    <Link href=''>
        <button className="accent-btn">
            {props.text}
        </button>
    </Link>
)