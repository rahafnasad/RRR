import React from 'react'
import Categories from '../categor/Categories'
import './home.css'

export default function Home() {
  return (

<>

<div className=" myHome">
  <div className="overlay"></div>
  <div className="titel">
  <h1>RAHAF STORE</h1>
  </div>
  <div className="des">
<p>Welcome to the best online shopping store. We have all the supplies you may need</p>
  </div>
<div className="home">

<div className="bg"></div>
  <div className="bg"></div>
  <div className="bg"></div>
  <div className="bg"></div>
  <div className="bg"></div>
  <div className="bg"></div>

  <div className="bg"></div>
  <div className="bg"></div>
  <div className="bg"></div>
  <div className="bg"></div>
</div>
<div className="imgHome">
  <img src="l.png" alt="" />
</div>


</div>

<Categories/>
</>
    )
}
