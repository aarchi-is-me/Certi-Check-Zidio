import React from 'react'

const PriceSection = () => {
  return (
  
    <div className="mt-20 mb-20">
         <h2 className="sm:text-5xl lg:text-6xl text-center my-4 font-semibold ">
        Pricing
      </h2>
      <h3 className='text-center lg:text-2xl text-slate-700 sm:text-1xl my-4'>
         Pick up a plan to Vertify certificates and generate <br /> certificates without hustle
        </h3>

      <div className="flex flex-wrap">
    
          
     
          <div className=" price-1 w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
            <h1 className='sm:text-3xl lg:text-4xl  font-semibold '> Standard</h1>
            
              <p className=" mt-8 mb-8 flex item-center  ">
              <h1 className='sm:text-3xl lg:text-6xl font-semibold'>$0 </h1>
                <span className='mt-8 ml-2'> /Month</span>
              </p>
              <div className=" sm:text-1xl lg:text-1xl text-slate-900 mb-4 tracking-wide">
              <h1 className='sm:text-1xl lg:text-1xl  font-bold mt-2  '>Key Feature </h1>
              <ul className="list-disc ml-5 ">
                  <li  className="mt-2">Certificate &  verification</li>
                  <li  className="mt-2">Mass generation & sending</li>
                  <li  className="mt-2">PDF certificate export</li>
                  <li  className="mt-2">LinkedIn certificates & badges</li>
              </ul>
              </div>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center  w-full h-12 p-5 mt-10 tracking-tight text-xl text-white bg-blue-700 hover:bg-slate-800  rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
     
          <div className=" price-2 w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
            <h1 className='sm:text-3xl lg:text-4xl  font-semibold '> Professional</h1>
            
              <p className=" mt-8 mb-8 flex item-center  ">
              <h1 className='sm:text-3xl lg:text-6xl font-semibold'>$67 </h1>
                <span className='mt-8 ml-2'> /Month</span>
              </p>
              <div className=" sm:text-1xl lg:text-1xl text-slate-900 mb-4 tracking-wide">
              <h1 className='sm:text-1xl lg:text-1xl  font-bold mt-2  '>Key Feature </h1>
              <ul className="list-disc ml-5 ">
                  <li  className="mt-2">Branded email templates</li>
                  <li  className="mt-2">Custom email content</li>
                  <li  className="mt-2">Credential delivery analytics</li>
                  <li  className="mt-2">Premium branding</li>
              </ul>
              </div>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center  w-full h-12 p-5 mt-10 tracking-tight text-xl text-white bg-blue-700 hover:bg-slate-800  rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>


          <div className=" price-3 w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
            <h1 className='sm:text-3xl lg:text-4xl  font-semibold '> Premium</h1>
            
              <p className=" mt-8 mb-8 flex item-center  ">
              <h1 className='sm:text-5xl lg:text-6xl font-semibold'>$339 </h1>
                <span className='mt-8 ml-2'> /Month</span>
              </p>
              <div className=" sm:text-1xl lg:text-1xl text-slate-900 mb-4 tracking-wide">
              <h1 className='sm:text-1xl lg:text-1xl  font-bold mt-2  '>Key Feature </h1>
              <ul className="list-disc ml-5 ">
                  <li  className="mt-2">Extra workspaces by request</li>
                  <li  className="mt-2">Dedicated account manager</li>
                  <li  className="mt-2">Verified issuer status</li>
                  <li  className="mt-2">Verified issuer status</li>
              </ul>
              </div>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center  w-full h-12 p-5 mt-10 tracking-tight text-xl text-white bg-blue-700 hover:bg-slate-800  rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
      

      </div>
    </div>
  )
}

export default PriceSection