import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
     <div className="w-full  flex flex-col h-fit justify-center items-center ">
           <div className="Card-container mb-32  "> 
          <div className="   mt-6 flex  justify-center  flex-wrap ">
          <img src="https://cdn.rode.com/website/images/logo/RODE_logo_142x85_desktop_light_mode.svg" alt="" />
          <div className="all-links">
           <div className="heading">
            Products
            <ul>
            <Link to={"/"} >Microphones</Link>
            <Link>  Headphones</Link>
            <Link> Interfaces and Mixers</Link>
            <Link> Accessories</Link>
            <Link> Software</Link>
            <Link>  Apparel</Link>

            </ul>
           </div>
          </div>

          </div>
        </div>
        </div>
    </>
  )
}

export default Footer