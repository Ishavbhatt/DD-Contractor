import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section className="lg:py-10 lg:px-28 md:p-10 px-5 py-10 bg-ftr-bg">
      <div className="flex flex-wrap lg:justify-between -mx-1 lg:-mx-4">
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-2/5">
          <h2 className="text-white text-2xl mb-5">
        Contact Us
          </h2>
          {[
            {
              icon: "/icons/pin.png",
              text: "Dharmashal, Himachal Pradesh, India",
            },
            {
              icon: "/icons/mail.png",
              text: "ishavbhattkhaniyara@gmail.com",
            },
            {
              icon: "/icons/smartphone.png",
              text: "9418249045",
            },
          ].map((item, index) => (
            <div className="flex my-5" key={index}>
              <Image src={item.icon} width={30} height={30} />
                <a className="text-custom-grey ml-2 text-base font-thin align-center">
                  {item.text}
                </a>
            </div>
          ))}{" "}
        </div>
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
          <h2 className="text-white text-2xl mb-5">
            Quick Links
          </h2>
          {[
            {
              text: "Home",
              link: "/",
            },
            {
              text: "About Us",
              link: "/",
            },
            {
              text: "Services",
              link: "/",
            },
            {
              text: "Trekking Packages",
              link: "/",
            },
            {
              text: "Contact Us",
              link: "/",
            },
          ].map((item, index) => (
            <div className="flex text-center my-3" key={index}>
              <Image src="/icons/next.png" width={20} height={20} />
              <Link href={item.link}>
                <a className="text-custom-grey text-base font-thin align-center hover:text-custom-orange">
                  {item.text}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
          <h1 className="text-white text-2xl mb-5">
            Best Packages
          </h1>
          {[
            {
              text: "Kedarnath Trek",
              link: "/UkTrekking",
            },
            {
              text: "Dharamshala Tour",
              link: "/NorthIndiaTour",
            },
            {
              text: "Vaishnu Devi Tour",
              link: "/SaktipithTour",
            },
            {
              text: "Triund Trek",
              link: "/HimachalTrekking",
            },
            {
              text: "Mini Swiss Tour",
              link: "/NorthIndiaTour",
            },
          ].map((item, index) => (
            <div className="flex my-3" key={index}>
              <Image src="/mail.png" width={20} height={20} />
              <Link href={item.link}>
                <a className="text-custom-grey text-base font-thin align-center hover:text-custom-orange">
                  {item.text}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <p className="text-center mt-4 bg-copyright-bg text-custom-grey cursor-pointer font-light text-base border-b-50">
        © Dev Bhumi holidays. All rights reserved.
      </p> */}
    </section>
  );
}
export default Footer;
