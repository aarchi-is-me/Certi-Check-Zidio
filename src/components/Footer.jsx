import LOGO from "../assets/LOGO.png"
import At from "../assets/At.png";
import InstagramLogo from "../assets/InstagramLogo.png"
import WhatsappLogo from "../assets/WhatsappLogo.png"

const Footer = () => {
  return (
    <footer className="footer text-white p-10">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 g mb-4 md:mb-0">
            <img className="text-xl font-bold mb-4" src={LOGO} alt="" />
            <p className="text-sm mr-5">
              Hello, we are ABC, trying to make an effort to put the right people for you to get the best results. Just insight
            </p>
            <form>
              <div class="flex mb-4 mt-10 border rounded-md">
                <input
                  type="email"
                  id="email"
                  class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                <button type="submit" class="bg-blue-500 text-white  px-10 py-2 rounded-r-md hover:bg-blue-600">
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Resources</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Documents</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Certificate </a></li>
              <li><a href="#" className="hover:underline">Price</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-blue-500 flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-2 sm:mb-0 text-sm">
            <a href="#" className="mr-4 hover:underline">Terms</a>
            <a href="#" className="mr-4 hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
          <div className="w-full sm:w-auto gap-5 flex justify-center sm:justify-end">
            <img src={WhatsappLogo} alt="" />
            <img src={InstagramLogo} alt="" />
            <img src={At} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;