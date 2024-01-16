import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10">
      <div className="divider"></div>
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900"
        >
          <span className="text-orange-500">DESTINY</span>SHOP
        </a>
        <ul className="flex flex-wrap justify-center items-center text-gray-900 mt-5">
          <li>
            <a
              href="#"
              className=" inline-block mr-4 hover:underline text-2xl hover:text-orange-600"
            >
              <FaFacebook></FaFacebook>
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" inline-block mr-4 hover:underline text-2xl hover:text-orange-600"
            >
              <FaInstagram></FaInstagram>
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" inline-block mr-4 hover:underline text-2xl hover:text-orange-600"
            >
              <FaTwitter></FaTwitter>
            </a>
          </li>
        </ul>
        <div className="divider"></div>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023-2024{" "}
          <a href="#" className="hover:underline">
            DestinyShop™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
