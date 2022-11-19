import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 500 mb-3 navbar-seatup">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between min-w-full">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-extrabold leading-relaxed inline-block whitespace-nowrap  text-white"
              href="#pablo"
            >
            SeatUp
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center text-xl text-center " +
              (navbarOpen ? " flex pt-4" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="flex items-center text-xs rounded-full py-3 px-6 bg-yellow-400 font-extrabold text-white hover:opacity-75 text-center"
                  href="#pablo"
                >
                  <i className="opacity-75 "></i><span className=" text-xl text-black">Beranda</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-3 flex items-center text-xs  font-extrabold text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-white opacity-75"></i><span className="text-xl ml-2">Menu</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-3 flex items-center text-xs  font-extrabold text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-white opacity-75"></i><span className="text-xl ml-2">Keranjang</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-3 flex items-center text-xs  font-extrabold text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-white opacity-75"></i><span className="text-xl ml-2">Masuk</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="rounded-full py-3 px-8 ml-2 flex items-center text-xs font-extrabold text-white hover:opacity-75 border-2"
                  href="#pablo"
                >
                  <i className="text-white opacity-75"></i><span className="text-xl">Daftar</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

