import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <section className="services pt-20 lg:px-28 md:px-28 px-5">
      <h1 className="title">Our Services</h1>
      <p className="text-t-c-grey text-center">Looking for a Mud house contractor? You can rest assured that you are working with the most creative, experienced & qualified technical experts in the mud house construction industry. We offer full range of services, from site inspection and architectural design through to testing and analysis of your structure.</p>
      <div className="md:flex justify-between flex-wrap py-3">
        {[
          {
            picture: "/construction.jpg",
            heading: "Mud House",
            subheading:
              "Kedarkantha is holy Hindu Town located in Rudraprayag district of Uttrakhand in India. It is one of the Char Dhams located in Himalayas. Kedarnath is situated at an astonishing height of 3584 meter.",
          },
          {
            picture: "/construction.jpg",
            heading: "River Stone House",
            subheading:
              "Roopkund trek is a total of 8 days and 7 nights trek that involves covering a total distance of 53 km. The total distance covered includes Lohajung- Didna village-Ali",
          },
          
          {
            picture: "/construction.jpg",
            heading: "Floor Slate",
            subheading:
              "The total trekking distance of Har ki dun trek is 47 km which you can cover in 6 to 7 days. The trek is easy to moderate and takes you through some of the beautiful places.",
          }
        ].map((item, index) => (
          <div className="border border-b-r-color rounded bg-white overflow-hidden md:w-1/4 lg:w-30p m-h-72 hover:border-none hover:shadow-2xl" key={index}>
            <div className="hover:opacity-75">
              <Image
                src={item.picture}
                width={800}
                height={400}
                layout="responsive"
              />
            </div>
              <h2 className="lg:text-2xl text-xl text-center text-custom-heading font-semibold leading-7 tracking-normal p-2">
                {item.heading}
              </h2>
            <p className="font-thin text-center text-base text-t-c-grey leading-7 p-2">
              {item.subheading}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;