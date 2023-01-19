import React from 'react'

const Expolor = () => {
const imgs = [{
    img:"https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5357%2Fmicrophones-module-1200x300-rgb.png",
    textImg:"https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5364%2Fmicrophones-text.svg"
},
{
    img:"https://rode.com/assets/images%2Fpage%2F1%2Fmodules%2F5359%2Finterfaces-module-2022-1200x300-rgb.jpg",
    textImg:"https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5366%2Finterfaces-text.svg"
},
{
    img:"https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5361%2Fsoftware-module-2021-1200x300-rgb.png",
    textImg:"https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5365%2Fsoftware-text.svg"
},
{
    img:"https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5370%2Faccessories-module-2021-1200x300-rgb.png",
    textImg:"https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5368%2Faccessories-text.svg"
},
]

  return (
    <>
    <div className="w-full  flex flex-col h-fit justify-center items-center ">
          <h1 className='text-center w-full bg-white  text-4xl  font-semibold py-10 text-golden p-5'>Explore The RØDE Range</h1>

           <div className="Card-container mb-32  "> 
          <div className="   mt-6 flex  justify-center  flex-wrap ">
          {
            imgs && (
              imgs.map((item,i)=>{
                return(
                  <div className="card py-4 relative   space-x-1  text-center flex flex-col items-center" key={i}>
                   <div className="Explore-images">
                    <img src={item.img} alt="" />
                   </div>
                   <div className="text-svg   absolute z-40  top-4">
                    <img className=' w-full h-40 mt-16  ' src={item.textImg} alt="" />
                   </div>
                  </div>
                )
              })
            )
          }
         
          </div>
        </div>
        <hr  className='w-full h-5  border-t-[3px]   '/>
        </div>
    </>
  )
}

export default Expolor