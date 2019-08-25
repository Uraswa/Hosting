import React from 'react'
import Link from "next/link";
import './accentbtn.sass'


export default (props) => (
    <Link>
        <button className="accent-btn">
            {props.text}
        </button>
    </Link>
)