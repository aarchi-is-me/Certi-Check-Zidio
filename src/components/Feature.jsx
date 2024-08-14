import SealCheck from '../assets/SealCheck.png'
import UserCircle from '../assets/UserCircle.png'
import Info from '../assets/Info.png'
import pdf from '../assets/pdf.png'
import url from '..//assets/url.png'
import email from '..//assets/email.png'



const Feature = () => {
  return (

    <div className="Feature  mt-20">

      <div className="Feature-top">

        <h2 className=" sm:text-6xl lg:text-6xl text-center my-4 font-semibold ">
          Key Feature
        </h2>
        <h3 className='text-center lg:text-2xl text-slate-700 sm:text-1xl my-7'>
          Trusted for simplicity, time-efficiency, and professional impact
        </h3>

        <div className="flex flex-wrap ">

          <div className="key-1 price-1 w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <div className=" my-2 w-full">
                <img className='' src={SealCheck} alt="check img" />
              </div>
              <h1 className='sm:text-3xl lg:text-4xl  font-semibold '>  Instant<br></br>Verification</h1>

              <p className=" mt-8  flex item-center  ">
                Quickly verify the authenticity of certificates with just a few
                clicks, providing immediate peace of mind.
              </p>

            </div>
          </div>



          <div className="key-2 price-1 w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <div className=" my-2 w-full">
                <img className='' src={UserCircle} alt="check img" />
              </div>
              <h1 className='sm:text-3xl lg:text-4xl  font-semibold '>
                User<br></br>Dashboard
              </h1>

              <p className=" mt-8  flex item-center  ">
                Easily manage and track all your certificates in one centralized
                location, making organization and retrieval a breeze.
              </p>
            </div>
          </div>

          <div className="key-3 price-1 w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <div className=" my-2 ">
                <img className='' src={Info} alt="check img" />
              </div>
              <h1 className='sm:text-3xl lg:text-4xl  font-semibold '>  Comprehensive<br></br>Support</h1>

              <p className=" mt-8 flex item-center  ">
                Our dedicated support team is here to assist you every step of the
                way, ensuring a smooth and hassle-free experience.
              </p>


            </div>
          </div>

        </div>

        <div className="btn flex justify-left py-10 justify-center  ">
          <a href="#" className="b-btn text-lg py-3 px-10  rounded-full tracking-wide hover:bg-slate-800">
            Get Start
          </a>
        </div>
      </div>


      <div className="Feature-bottom mt-20 ">

        <h2 className="sm:text-3xl lg:text-4xl text-center my-10 font-bold ">
          Generate, send, export certificates & badges in bulk
        </h2>


        <div className="flex flex-wrap ">

          <div className="key-1 price-1 w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className=" my-2 w-full">
              <img src={email} alt="check img" />
            </div>
            <div className="p-10 border border-neutral-700 rounded-xl">
              <h1 className='sm:text-2xl lg:text-3xl  font-semibold '>  Bulk sending via E-mail</h1>

              <p className=" mt-8  flex item-center  ">
                Eliminate tedious manual work and human error by sending your
                certificates & badges to all your recipients at once.
              </p>

            </div>
          </div>



          <div className="key-2 price-1 w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className=" my-2 w-full">
              <img src={pdf} alt="check img" />
            </div>
            <div className="p-10 border border-neutral-700 rounded-xl">

              <h1 className='sm:text-2xl lg:text-3xl font-semibold '>
                Mass-export as PDFs
              </h1>

              <p className=" mt-8  flex item-center  ">
                Avoid downloading your certificates & badges one by one and save
                time by mass-exporting them as PDF docs.
              </p>
            </div>
          </div>

          <div className="key-3 price-1 w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className=" my-2 w-full">
              <img src={url} alt="check img" />
            </div>
            <div className="p-10 border border-neutral-700 rounded-xl">

              <h1 className='sm:text-2xl lg:text-3xl  font-semibold '> Mass-generate URL lists</h1>

              <p className=" mt-8 flex item-center  ">
                Reduce organizational chaos by instantly accessing all your
                generated certificates in a grouped URL list.
              </p>


            </div>
          </div>

        </div>

        <div className="btn flex justify-left py-10 justify-center  ">
          <a href="#" className="b-btn text-lg py-3 px-10  rounded-full tracking-wide hover:bg-slate-800">
            Get Start
          </a>
        </div>
      </div>
    </div>




  )
}

export default Feature