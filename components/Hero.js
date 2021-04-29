import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <div className="relative h-screen my-8 overflow-hidden rounded-lg bg-white">
        <div className="absolute z-30 flex w-full h-full">
          <div className="relative z-30 w-5/6 pl-6 py-8 text-white md:py-10 md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Hy next
            </h2>
            <p className="sm:text-sm md:text-lg lg:text-xl pt-2">
              
            </p>
          </div>
          <div className="absolute top-0 right-0 flex w-full h-full">
            <div className="w-1/3 h-full bg-custom-orange"></div>
            <div className="relative w-1/3">
              <svg
                fill="currentColor"
                viewBox="0 0 100 100"
                className="absolute inset-y-0 z-20 h-full text-custom-green"
              >
                <polygon
                  id="diagonal"
                  points="0,0 100,0 50,100 0,100"
                ></polygon>
              </svg>
              <svg
                fill="currentColor"
                viewBox="0 0 100 100"
                className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
              >
                <polygon points="0,0 100,0 50,100 0,100"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 block w-9/12 h-full">
          <img
            alt=""
            className="object-cover min-w-full h-full"
            src="/construction.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
