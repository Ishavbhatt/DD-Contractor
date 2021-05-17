import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section className="about pt-20">
       <h1 className="title">About Us</h1>
      <div className="relative h-96 my-8 overflow-hidden bg-white">
        <div className="absolute z-30 flex w-full h-full">
          <div className="relative z-30 w-4/5 pl-28 pt-10 md:w-1/2">
            <h2 className="text-3xl text-custom-heading md:text-4xl lg:text-5xl">
            Mud House Contractor
            </h2>
            <p className="text-t-c-grey py-3 text-base">
                CA  is the original rammed earth builder in India, having built hundreds of residences and commercial projects since 2010.
            </p>
            <p className="text-t-c-grey">
            specialises in the construction of rammed earth walls. It's what we do, and we do it really well...Over the past 10 years, contemporary rammed earth walls have become a much loved building material for India sustainable housing sector who understand its unique thermal and aesthetic benefits.            </p>
          </div>
          <div className="absolute top-0 right-0 flex w-full h-full">
            <div className="w-1/3 h-full bg-white"></div>
            <div className="relative w-1/3">
              <svg
                fill="currentColor"
                viewBox="0 0 100 100"
                className="absolute inset-y-0 z-20 h-full text-white"
              >
                <polygon
                  id="diagonal"
                  points="0,0 100,0 50,100 0,100"
                ></polygon>
              </svg>
              <svg
                fill="currentColor"
                viewBox="0 0 100 100"
                className="absolute inset-y-0 z-10 h-full ml-6 text-white "
              >
                <polygon points="0,0 100,0 50,100 0,100"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 block w-9/12 h-full">
          <img
            alt="aboutimage"
            className="object-fill min-w-full h-full"
            src="/construction.jpg"
          />
        </div>
      </div>
    </section>
  );
}
export default About;
