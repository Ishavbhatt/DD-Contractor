import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section className="about lg:px-28 px-5 pt-20">
      <h1 className="title">About Us</h1>
      <div className="md:flex content-center justify-between flex-wrap py-5">
        <div className="lg:w-2/5 sm:m-auto lg:m-0">
          <img
            alt="aboutimage"
            className="object-fill min-w-full h-full"
            src="/construction.jpg"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-left pt-8 text-center text-custom-heading md:text-4xl lg:text-5xl">
            Mud House Contractor
          </h2>
          <p className="text-t-c-grey lg:text-left text-center py-3 text-base">
            CA is the original rammed earth builder in India, having built
            hundreds of residences and commercial projects since 2010.
          </p>
          <p className="text-t-c-grey lg:text-left text-center">
            specialises in the construction of rammed earth walls. It's what we
            do, and we do it really well...Over the past 10 years, contemporary
            rammed earth walls have become a much loved building material for
            India sustainable housing sector who understand its unique thermal
            and aesthetic benefits.
          </p>
        </div>
      </div>
      <div className="py-5 md:flex justify-between flex-wrap">
        {[
          {
            icon: "/icons/mission.png",
            heading: "Our Mission",
            paragraph:
              "To installs rammed earth walls for our clients and make a global reputation to promote research, refine technologies, disseminate information and build the credibility.",
          },
          {
            icon: "/icons/history.png",
            heading: "Our History",
            paragraph:
              "An entrepreneur, builder and designer in summer of 2010, is a company built on a friendly and professional team that only delivers the highest quality of Mud Houses.",
          },
          {
            icon: "/icons/self-esteem.png",
            heading: "With Proud!",
            paragraph:
              "With the groups experience of over 10 years we work closely with owners and architects to have rammed earth walls constructed to their expectations & specifications.",
          },
        ].map((item, index) => (
          <div
            className="rounded overflow-hidden md:w-1/4 lg:w-30p my-5"
            key={index}
          >
            <div className="text-center">
              <Image src={item.icon} width={50} height={50} />
            </div>
            <h1 className="text-center text-custom-heading text-xl lg:text-2xl py-2">
              {item.heading}
            </h1>
            <p className="text-t-c-grey text-center">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default About;
