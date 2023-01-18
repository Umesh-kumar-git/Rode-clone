import React from 'react'
import {IoLocationOutline} from "react-icons/io5";
import {MdArrowDropDown} from "react-icons/md";
import {CiUser} from "react-icons/ci";
import {BiSearch} from "react-icons/bi"
import { Link } from 'react-router-dom';
const Navbar = () => {

   const links = [
    {
      name:"Products",
      link:"/",

    },
    {
      name:"user guides",
      link:"/"
    },
    {
      name:"Solutions",
      link:"/"
    },
    {
      name:"apparel",
      link:"/"
    },
    {
      name:"supports",
      link:"/"
    }

   ]


  return (
    <>
    {/* navbar section */}
    <nav   >
      <div className="navbar  mx-32"> 
        <div className="top-navbar flex    justify-between  py-1 ">
         <div className="left-section flex  items-center  ">
            <IoLocationOutline className='mx-1'/>
            <span>EN</span>
            <MdArrowDropDown/>
            </div>
            <div className="right-section flex items-center cursor-pointer ">
              <span className='name uppercase font-extrabold  text-gray-300 '>RØDE <span className=' hover:text-red-800 '>⩙</span> </span>
               <CiUser className='mx-2' />
            </div>
        </div>
      </div>
            <hr  />
      <div className="navbar-bottom mt-3  mx-32">
       <div className="navbar flex  justify-between   items-center">
        <div className="log text-4xl font-extrabold cursor-pointer ">RØDE</div>
        <div className="navbar-Links  col-span-2 ">
          {links&&(
            links.map((item,i)=>{
              return(
                <Link className=' uppercase  px-4 p-2' key={i} to={item.link}>{item.name}</Link>
              )
            })
          )}
        </div>
        <BiSearch className=' w-8 h-8 mx-2 p-1'  />

       </div>
      </div>
 
    </nav>

    </>
  )
}

export default Navbar