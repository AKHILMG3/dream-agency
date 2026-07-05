import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";

function Header() {
  return (
    <header className="relative z-20 overflow-hidden">
      <div className="mx-auto flex min-h-20 flex-col items-center justify-between gap-4 px-5 py-4 sm:flex-row sm:gap-6">
        <nav className="order-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-600 sm:order-1 sm:justify-start sm:text-base lg:gap-8">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
        </nav>

        <h1 className="order-1 text-2xl font-serif font-bold text-[#3F2B46] sm:order-2 lg:text-3xl">
          Dream Agency
        </h1>

        <div className="order-3 flex items-center justify-center gap-3 text-[#3F2B46] sm:gap-4">
          <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#3F2B46] sm:h-10 sm:w-10">
           <a href="https://www.facebook.com/" target="_self" rel="noopener noreferrer">
              <FaFacebookF size={22} />
            </a>
          </div>
          <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#3F2B46] sm:h-10 sm:w-10">
           <a href="https://www.linkedin.com/feed/" target="_self" rel="noopener noreferrer">
              <BiLogoLinkedin size={24} />
            </a>
          </div>
          <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#3F2B46] sm:h-10 sm:w-10">
          <a href="https://www.instagram.com/" target="_self" rel="noopener noreferrer">
            <FaInstagram size={22} />
          </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
