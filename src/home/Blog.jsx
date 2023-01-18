import React from 'react'

const Blog = () => {

  const cards = [
    {
      title :"Introducing New Wireless GO II Firmware: Camera Presets, Nested Recordings and More",
      img:"https://edge.rode.com/images/page/1/modules/7288/rode-wireless-go-II-insitu-girl-working-by-window-desk-jan-2021-580x509-54af56a.jpg",
      para:"Here’s everything you need to know about the new Wireless GO II and RØDE Central updates"
    },
    {
      title :"Introducing New Wireless GO II Firmware: Camera Presets, Nested Recordings and More",
      img:"https://edge.rode.com/images/page/1/modules/7288/rode-wireless-go-II-insitu-girl-working-by-window-desk-jan-2021-580x509-54af56a.jpg",
      para:"Here’s everything you need to know about the new Wireless GO II and RØDE Central updates"
    },
    {
      title :"Introducing New Wireless GO II Firmware: Camera Presets, Nested Recordings and More",
      img:"https://edge.rode.com/images/page/1/modules/7288/rode-wireless-go-II-insitu-girl-working-by-window-desk-jan-2021-580x509-54af56a.jpg",
      para:"Here’s everything you need to know about the new Wireless GO II and RØDE Central updates"
    },
    {
      title :"Introducing New Wireless GO II Firmware: Camera Presets, Nested Recordings and More",
      img:"https://edge.rode.com/images/page/1/modules/7288/rode-wireless-go-II-insitu-girl-working-by-window-desk-jan-2021-580x509-54af56a.jpg",
      para:"Here’s everything you need to know about the new Wireless GO II and RØDE Central updates"
    },

  ]


  return (
    <>
      <div className="blog w-full  flex flex-col bg-slate-50 justify-center items-center ">
          <h1 className='text-center w-full  text-4xl  font-semibold mt-5 text-golden p-5'>Latest From The RØDE Blog</h1>
          <div className="container w-full flex justify-center">
        <div className="container w-9/12 mt-6 flex justify-center ">
          {
            cards && (
              cards.map((item,i)=>{
                return(
                  <div className="card bg-white w-1/2 text-center flex flex-col items-center" key={i}>
                  <div className="h3 text-3xl">{item.title} </div>
                  <div className="img  ">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="para  py-9 ">{item.para}</div>
                 <div className="btn uppercase p-2 px-6 w-36 bg-golden rounded-full">Learn More</div>
                 </div>
                )
              })
            )
          }
         
          </div>


        </div>
    </div>
      </>
  )
}

export default Blog