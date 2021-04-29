import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineWhatsApp } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isactive: false,
    };
  }

  handleActive = (value) => {
    this.setState({
      isactive: value,
    });
  };

  render() {
    let { isactive } = this.state;
    return (
      <>
        <div className="header lg:px-28 px-5 py-3 fixed lg:py-0 bg-white w-full top-0 inset-x-0 shadow-lg bg-white z-50">
          <div className="flex justify-between items-center">
            <div className="">
              <a className="text-lg text-custom-heading" href="/">
                Contractor
              </a>
            </div>
            <nav className="nav-items xl:block lg:block hidden">
              <div className="flex items-center">
                <div className="py-1">
                  <Link href="/">
                    <a className="lg:p-2 ml-2 text-base px-0 text-custom-heading hover:text-custom-orange">
                      Home
                    </a>
                  </Link>
                </div>
                <div className="py-1">
                  <Link href="/">
                    <a className="lg:p-2 ml-2 text-base px-0 text-custom-heading hover:text-custom-orange">
                      About Us
                    </a>
                  </Link>
                </div>
                <div className="py-1">
                  <Link href="/">
                    <a className="lg:p-2 ml-2 text-base px-0 block text-custom-heading hover:text-custom-orange">
                      Services
                    </a>
                  </Link>
                </div>
                <div className="py-1">
                  <Link href="/">
                    <a className="lg:p-2 ml-2 text-base px-0 block text-custom-heading hover:text-custom-orange">
                      Projects
                    </a>
                  </Link>
                </div>
                <div className="py-1 ml-7">
                    <div className="flex items-center">
                    <BiPhoneCall className="text-xl text-custom-orange" />
                    <p className="ml-2 text-base text-custom-heading">9418249045</p>
                    </div>
                    <div className="flex items-center">
                    <AiOutlineWhatsApp className="text-xl text-custom-orange" />
                    <p className="ml-2 text-base text-custom-heading">8219703715</p>
                    </div>
                </div>
              </div>
            </nav>
            <AiOutlineMenu
              className="text-3xl lg:hidden block text-custom-green font-bold "
              onClick={() => this.handleActive(true)}
            />
          </div>
        </div>
        {/* active mobile page */}
        {isactive ? (
          <section className="header-trans">
            <div className="bg-white py-3 h-screen fixed w-full inset-x-0 top-0 z-50 pb-5 lg:hidden inline">
              <div className="lg:px-10 md:px-10 px-5 pb-2 rwrapper">
                <div className="flex justify-between items-center">
                  <div className="">
                    <a className="text-lg text-custom-heading" href="/">
                     Contractor
                    </a>
                  </div>
                  <MdClose
                    className="text-3xl text-custom-green font-bold"
                    onClick={() => this.handleActive(false)}
                  />
                </div>
                <div className="py-10">
                  <nav className="nav-items">
                    <div className="py-1">
                      <Link href="/">
                        <a
                          className="text-base text-center text-custom-heading hover:text-custom-orange block py-2"
                          onClick={() => this.handleActive(false)}
                        >
                          Home
                        </a>
                      </Link>
                    </div>
                    <div className="py-1">
                      <Link href="/">
                        <a
                          className="text-base text-center text-custom-heading hover:text-custom-orange block py-2"
                          onClick={() => this.handleActive(false)}
                        >
                          About Us
                        </a>
                      </Link>
                    </div>
                    <div className="py-1">
                      <Link href="/">
                        <a
                          className="py-2 lg:p-2 text-center text-base px-0 block text-custom-heading hover:text-custom-orange"
                          onClick={() => this.handleActive(false)}
                        >
                          Services
                        </a>
                      </Link>
                    </div>
                    <div className="py-1">
                      <Link href="/">
                        <a
                          className="py-2 lg:p-2 text-center text-base px-0 block text-custom-heading hover:text-custom-orange"
                          onClick={() => this.handleActive(false)}
                        >
                          Projects
                        </a>
                      </Link>
                    </div>
                    <div className="py-3 text-center">
                    <div className="flex justify-center items-center">
                    <BiPhoneCall className="text-xl text-custom-orange" />
                    <p className="ml-2 text-base text-custom-heading">9418249045</p>
                    </div>
                    <div className="flex justify-center items-center">
                    <AiOutlineWhatsApp className="text-xl text-custom-orange" />
                    <p className="ml-2 text-base text-custom-heading">8219703715</p>
                    </div>
                </div>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Header;