import heroimg from "../assets/heroimg.png" 
import companylogo from "../assets/companylogo 2.png" 

const HeroSection = () => {
  return (
    <div className="HeroSection flex flex-col text-white item-cneter mt-2 lg:mt-15">
      
     <h5 className="text-sm sm:test-1xl lg:text-1xl text-slate-300  text-center mb-5 tracking-wide ">
        Create and Download a certificate 
     </h5>
       
     <h1 className="heading text-3xl sm:test-4xl text-white lg:text-6xl text-center tracking-wide">
         Verify Your Certificates <br /> & Download Easily
      </h1>

      <p className="text-sm text-slate-200  text-center mt-6 tracking-wide ">
      "Ensure the authenticity of your qualifications with our 
     <br /> secure verification system."
      </p>

      <div className="btn flex justify-center mt-10">
        <a href="#" className="text-lg py-3 px-6 mx-3   bg-white rounded-full tracking-wide hover:bg-slate-800">
            Get Start
        </a>
        <a href="#" className=" text-white py-3 px-6 mx-3 border sm:test-1xl rounded-full tracking-wide hover:hover:bg-slate-800 ">
          Verify Now
        </a>
      </div>

      <div className="heroimg flex justify-center">
        <img src={heroimg} alt="heroimg" />
      </div>

      <div className="btn flex justify-center ">
      <a href="#" className="b-btn text-lg py-3 px-10 mx-3 rounded-full tracking-wide hover:bg-slate-800">
            Get Start
        </a>

      </div>
      <div className="flex justify-center mt-10 text-slate-400">
        <h5>1,000+ companies already use Certicheck</h5>
      </div>

      <div className="btn flex justify-center py-5">
        <img src={companylogo} alt="company logo" />
        
      </div>
    </div>
    
    
  )
}

export default HeroSection