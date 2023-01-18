import React from 'react'
import Banner1 from './Banner1'
import Blog from './Blog'
import Bnr from './Bnr2'
import Bnr3 from './Bnr3'
import Bnr4 from './Bnr4'
import Bnr5 from './Bnr5'


const Home = () => {
  return (
    <>
    <div className='main' >
            <Banner1/>
            <Bnr/>
            <Bnr3/>
            <Bnr4/>
            <Bnr5/>
            <Blog/>
            

        </div>
    </>
  )
}

export default Home