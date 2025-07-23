import Button from "../components/button";
import KeyboardSvg from "../components/keyboard";
import Navbar from "../components/navbar";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mx-4 mt-8 space-y-16 lg:mx-8 xl:mx-auto md:mt-16 md:space-y-32 xl:mt-32 xl:space-y-64">
        <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-8 xl:gap-16 2xl:gap-32 xl:mx-8 2xl:mx-16">
          <div className="space-y-4 md:min-w-2/5">
            <h1 className="font-bold !font-header text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl">
              Hi,
              <br />
              I'm Sourena,
              <br />
              web developer
            </h1>
            <p className="!text-black/60 text-lg md:text-xl text-balance group 2xl:text-2xl">
              Developing with love, more passionately every day for the past{" "}
              <span className="font-bold !text-black/60 group-hover:!text-black transition-colors">
                four years
              </span>
            </p>
            <div className="flex gap-4">
              <Button className="bg-yellow ">Contact Me</Button>
              <Button>Projects</Button>
            </div>
          </div>
          <div className="self-center scale-[80%] sm:scale-90 lg:scale-100 xl:scale-110 2xl:scale-[120%]">
            <KeyboardSvg />
          </div>
        </div>

        <div className="xl:mx-8 2xl:mx-16">
          <div className="space-y-1">
            <h2 className="font-bold !font-header text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl">
              Projects
            </h2>
            <p className="!text-black/60 md:text-lg 2xl:text-xl">
              What I've been up to
            </p>
          </div>
          <div className="mt-8 space-y-8 lg:space-y-16 2xl:space-y-32">
            <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
              <div className="space-y-2">
                <h3 className="!font-header font-bold text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
                  Project title
                </h3>
                <div className="flex gap-2">
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    tag1
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    tag2
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    tag3
                  </p>
                </div>
                <p className="!text-black/60 group text-balance md:text-lg 2xl:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia reiciendis eos dolorum, earum deserunt autem cum
                  doloremque, ad cumque sapiente ducimus, voluptatibus animi
                  atque est odio harum quos voluptates. Facilis!
                </p>
                <a href="#" className="font-bold xl:text-lg">
                  Explore More{" "}
                  <img
                    src="/arrow.svg"
                    alt="arrow icon"
                    className="inline ml-1"
                  />
                </a>
              </div>
              <div className="bg-purple shadow border-2 border-black w-full h-50 lg:max-w-1/2"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Home;
