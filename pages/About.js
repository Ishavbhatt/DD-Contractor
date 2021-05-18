import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section className="about lg:px-28 px-5 pt-20">
      <h1 className="title">About Us</h1>
      <div className="flex align-center justify-between py-5">
        <div className="w-2/5 md:w-full">
          <h2 className="text-3xl text-custom-heading md:text-4xl lg:text-5xl">
            Mud House Contractor
          </h2>
          <p className="text-t-c-grey py-3 text-base">
            CA is the original rammed earth builder in India, having built
            hundreds of residences and commercial projects since 2010.
          </p>
          <p className="text-t-c-grey">
            specialises in the construction of rammed earth walls. It's what we
            do, and we do it really well...Over the past 10 years, contemporary
            rammed earth walls have become a much loved building material for
            India sustainable housing sector who understand its unique thermal
            and aesthetic benefits.
          </p>
        </div>
        <div className="w-2/5 md:w-full">
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
