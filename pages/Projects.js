import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <section className="services pt-20 lg:px-28 px-5">
      <h1 className="title">Our Projects</h1>
      <p className="text-t-c-grey text-center">Looking for a Mud house contractor? You can rest assured that you are working with the most creative, experienced & qualified technical experts in the mud house construction industry. We offer full range of services, from site inspection and architectural design through to testing and analysis of your structure.</p>
      <div className="md:flex justify-between flex-wrap">
        {[
          {
            picture: "/construction.jpg",
            heading: "Mud House"
          },
          {
            picture: "/construction.jpg",
            heading: "Mud House"
          },
          
          {
            picture: "/construction.jpg",
            heading: "Mud House"
          }
        ].map((item, index) => (
          <div className="container rounded relative overflow-hidden md:w-1/4 lg:w-30p my-5" key={index}>
            <img src={item.picture} alt="Avatar" className="block w-full h-72" />
            <div className="overlay">
              <div className="text">{item.heading}</div>
            </div>
          </div>

          // <div className="rounded relative overflow-hidden md:w-2/5 lg:w-1/5 my-5" key={index}>
          //   <div className="">
          //     <img className="h-56 w-full" src={item.picture} alt="" />
          //     <h1 className="text-custom-heading text-2xl pt-2 font-ghre">{item.heading}</h1>
          //   </div>
          // </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;