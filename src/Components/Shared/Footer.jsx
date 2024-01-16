import { Link } from "react-router-dom";

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
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 mt-5">
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 ">
              HOME
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              MEN
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 ">
              WOMEN
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              KIDS
            </Link>
          </li>
        </ul>
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
