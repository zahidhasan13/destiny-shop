import { Link, NavLink } from "react-router-dom";
import cartIcon from "../../assets/cart_icon.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, cart } = useContext(AuthContext);

  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    quantity = quantity + product.quantity;
  }
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              <span className="text-orange-500">DESTINY</span> SHOP
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {user ? (
              <p className="font-semibold">{user?.email}</p>
            ) : (
              <Link
                to="/login"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 font-bold"
              >
                Log in
              </Link>
            )}
            <Link
              to="/cart"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 font-bold"
            >
              <div className="relative">
                <img src={cartIcon} alt="" className="w-6" />
                <span className="bg-orange-600 w-5 h-5 absolute -top-2 -right-3 rounded-full flex justify-center items-center text-white">
                  {quantity}
                </span>
              </div>
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/mensSneaker"
                  className={({ isActive }) =>
                    isActive ? "py-2 border-b-2 border-red-500" : "py-2"
                  }
                >
                  Mens Sneaker
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mensPants"
                  className={({ isActive }) =>
                    isActive ? "py-2 border-b-2 border-red-500" : "py-2"
                  }
                >
                  Mens Pants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mensBoot"
                  className={({ isActive }) =>
                    isActive ? "py-2 border-b-2 border-red-500" : "py-2"
                  }
                >
                  Mens Boot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bag"
                  className={({ isActive }) =>
                    isActive ? "py-2 border-b-2 border-red-500" : "py-2"
                  }
                >
                  Bag
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cap"
                  className={({ isActive }) =>
                    isActive ? "py-2 border-b-2 border-red-500" : "py-2"
                  }
                >
                  Cap
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/earphones"
                  className={({ isActive }) =>
                    isActive ? "py-2 border-b-2 border-red-500" : "py-2"
                  }
                >
                  Earphone
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bottle"
                  className={({ isActive }) =>
                    isActive ? "py-2 border-b-2 border-red-500" : "py-2"
                  }
                >
                  Bottle
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
