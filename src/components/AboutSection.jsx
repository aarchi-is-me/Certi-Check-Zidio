import security from "../assets/security.png";
import management from "../assets/management.png";
import tracking from "../assets/tracking.png";
const AboutSection = () => {
  return (
    <div className="AboutSection mt-10 ">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center mt-5 font-bold ">
        Design, issue & manage digital
        <br />certificates in one place
      </h2>

      <p className="text-sm sm:text-1xl text-slate-800  text-center mt-6 tracking-wide ">
        Certicheck lets you create professionally-looking ai certificates, badges & <br />credentials
        without advanced design skills or tools.
      </p>



      <div className="about-container-1 flex flex-wrap justify-center gap-10 mt-10 ">

        <div className="p-2 w-full lg:w-1/2 ">
          <img src={security} alt="about img 1" />
        </div>

        <div className="w-full lg:w-2/5 py-4 ">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl text-left mt-5  font-semibold ">
            Certicheck : Simple and Secure Certificate Verification
          </h2>

          <p className="text-base text-slate-900  text-left mt-6 tracking-wide ">
            <span>At Certicheck , we provide a secure, quick, and user-friendly platform for verifying certificates. Our goal is to ensure that credential verification is easy, reliable, and accessible for everyone.</span>
          </p>
          <div className="text-base text-slate-900  text-left mt-6 tracking-wide">
            <ul className="list-disc ml-5">
              <li>Manage certificate change requests</li>
              <li>Simple: Our intuitive interface makes verification effortless.</li>
              <li>Reliable: Dependable and accurate results you can trust.</li>
            </ul>
          </div>
          <div className="btn flex justify-left py-10 ">
            <a href="#" className="b-btn text-lg py-3 px-10  rounded-full tracking-wide hover:bg-slate-800">
              Get Start
            </a>
          </div>

        </div>
      </div>



      <div className="about-container-2 flex flex-wrap-reverse justify-center gap-10 mt-10 ">
        <div className="about-text w-full lg:w-2/5 py-4 ">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl text-left mt-5  font-semibold ">
            Manage your certificates & badges from an easy-to-use dashboard
          </h2>

          <p className="text-base text-slate-900  text-left mt-6 tracking-wide ">
            <span>Certicheck lets you stay in full control over your certificates and badges. Update, resend, download, or restrict them from your Certicheck  dashboard.</span>
          </p>
          <div className="text-base text-slate-900  text-left mt-6 tracking-wide">
            <ul className="list-disc ml-5">
              <li>Manage certificate change requests</li>
              <li>Control credential status</li>
              <li>Restrict access to issued credentials</li>
            </ul>
          </div>
          <div className="btn flex justify-left py-10 ">
            <a href="#" className="b-btn text-lg py-3 px-10  rounded-full tracking-wide hover:bg-slate-800">
              Get Start
            </a>
          </div>

        </div>
        <div className="about-img p-2 w-full lg:w-1/2 ">
          <img src={management} alt="about img 1" />
        </div>

      </div>


      <div className="about-container-3 flex flex-wrap justify-center gap-10 mt-10 ">

        <div className="p-2 w-full lg:w-1/2 ">
          <img src={tracking} alt="about img 1" />
        </div>

        <div className="w-full lg:w-2/5 py-4 ">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl text-left mt-5  font-semibold ">
            Track how your recipients interact with their certificates
          </h2>

          <p className="text-base text-slate-900  text-left mt-6 tracking-wide ">
            <span>With Certifier, you can easily track your credential data, so you can better understand how your recipients interact with their certificates & badges.</span>
          </p>
          <div className="text-base text-slate-900  text-left mt-6 tracking-wide">
            <ul className="list-disc ml-5">
              <li>Get certificate delivery stats</li>
              <li>Track the number of views</li>
              <li>Compare certificate data</li>
            </ul>
          </div>
          <div className="btn flex justify-left py-10 ">
            <a href="#" className="b-btn text-lg py-3 px-10  rounded-full tracking-wide hover:bg-slate-800">
              Get Start
            </a>
          </div>

        </div>
      </div>
    </div>

  )
}

export default AboutSection