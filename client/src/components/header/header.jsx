import React from 'react'
import './header.css'
import pic from "./1.jpg";
export default function header() {
  return (
    <div className='header'>
    <div className="headerTitles">
        <span className="headerTitleSm">Create a unique and beautiful blog easily</span>
        <span className="headerTitleLg">PUBLISH YOUR PASSION, YOUR WAY</span>
      </div>
      <img
        className="headerImg"
        src={pic}
        alt=""
      />
     
    </div>
  )
}
