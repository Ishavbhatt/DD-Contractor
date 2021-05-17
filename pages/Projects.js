import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <section className="services pt-20 lg:px-28 md:px-28 px-5">
      <h1 className="title">Our Projects</h1>
      <p className="text-t-c-grey text-center">Looking for a Mud house contractor? You can rest assured that you are working with the most creative, experienced & qualified technical experts in the mud house construction industry. We offer full range of services, from site inspection and architectural design through to testing and analysis of your structure.</p>
      <div className="md:flex justify-between flex-wrap">
        {[
          {
            picture: "/construction.jpg",
          },
          {
            picture: "/construction.jpg",
          },
          
          {
            picture: "/construction.jpg",
          },
          {
            picture: "/construction.jpg",
          }
        ].map((item, index) => (
          <div className="border border-b-r-color rounded bg-white overflow-hidden md:w-2/5 lg:w-1/5 my-10 m-h-72 hover:border-none hover:shadow-2xl" key={index}>
            <div className="hover:opacity-75">
              <Image
                src={item.picture}
                width={800}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;