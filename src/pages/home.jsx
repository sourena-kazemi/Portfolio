import Link from "../components/link";
import KeyboardSvg from "../components/keyboard";
import Navbar from "../components/navbar";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mx-4 mt-8 space-y-16 lg:mx-8 xl:mx-auto md:mt-16 md:space-y-32 xl:mt-32 xl:space-y-64">
        <section
          className="flex flex-col md:flex-row md:items-center md:justify-around gap-8 xl:gap-16 2xl:gap-32 xl:mx-8 2xl:mx-16"
          aria-labelledby="hero-section-title"
        >
          <div className="space-y-4 md:min-w-2/5">
            <hgroup className="space-y-4">
              <h1
                className="font-bold !font-header text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl"
                id="hero-section-title"
              >
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
            </hgroup>
            <div className="flex gap-4">
              <Link className="bg-yellow " href="#contact">
                Contact Me
              </Link>
              <Link href="#projects">Projects</Link>
            </div>
          </div>
          <div className="self-center scale-[80%] sm:scale-90 lg:scale-100 xl:scale-110 2xl:scale-[120%] group">
            <KeyboardSvg />
          </div>
        </section>

        <section
          id="projects"
          className="xl:mx-8 2xl:mx-16"
          aria-labelledby="projects-section-title"
        >
          <hgroup className="space-y-1">
            <h2
              className="font-bold !font-header text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl"
              id="projects-section-title"
            >
              Projects
            </h2>
            <p className="!text-black/60 md:text-lg 2xl:text-xl">
              What I've been up to
            </p>
          </hgroup>
          <div className="mt-8 space-y-8 2xl:mt-16 lg:space-y-16 ">
            <article className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
              <div className="space-y-2">
                <hgroup className="space-y-1">
                  <h3 className="!font-header font-bold text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
                    Norasil
                  </h3>
                  <p className="!text-black/60 md:text-lg 2xl:text-xl">
                    Website Redesign
                  </p>
                </hgroup>
                <div className="flex gap-2 flex-warp">
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    UI / UX
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    Design
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    Figma
                  </p>
                </div>
                <p className="!text-black/60 group text-balance md:text-lg 2xl:text-xl lg:max-w-3/4">
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    Led the complete redesign
                  </span>{" "}
                  of Norasil's corporate website, transforming it into a
                  user-friendly interface that resonates with the {""}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    company's vision
                  </span>
                  . The new design is more modern and{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    improves the user experience
                  </span>
                  .
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link>Live Website</Link>
                  <Link>Figma Design</Link>
                </div>
              </div>
              <div className="bg-purple shadow transition-all hover:shadow-hover hover:-translate-0.5 active:shadow-none active:translate-1 border-2 border-black w-full md:max-w-3/4 lg:max-w-2/5">
                <img
                  src="./projects/Norasil.png"
                  alt="showcase of the norasil project"
                />
              </div>
            </article>

            <article className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
              <div className="space-y-2">
                <hgroup className="space-y-1">
                  <h3 className="!font-header font-bold text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
                    Shorl
                  </h3>
                  <p className="!text-black/60 md:text-lg 2xl:text-xl">
                    Minimal URL Shortener
                  </p>
                </hgroup>
                <div className="flex gap-2 flex-wrap">
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    Go
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    Tailwind
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    Alpine
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    Authentication
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    SQL Database
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    API
                  </p>
                </div>
                <p className="!text-black/60 group text-balance md:text-lg 2xl:text-xl lg:max-w-3/4">
                  Built from scratch, Shorl is a url shortener website powered
                  by a backend written in{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    go
                  </span>{" "}
                  with{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    authentication, database integrations, and upcoming caching
                    and analytics
                  </span>
                  . The frontend has a minimal and interactive design with the
                  help of{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    tailwind
                  </span>{" "}
                  and{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    alpine
                  </span>
                  .
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link>Code On Github</Link>
                  <Link>System Design Document</Link>
                </div>
              </div>
              <div className="bg-purple shadow transition-all hover:shadow-hover hover:-translate-0.5 active:shadow-none active:translate-1 border-2 border-black w-full md:max-w-3/4 lg:max-w-2/5">
                <img
                  src="./projects/Shorl.png"
                  alt="showcase of the Shorl project"
                />
              </div>
            </article>

            <article className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
              <div className="space-y-2">
                <hgroup className="space-y-1">
                  <h3 className="!font-header font-bold text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
                    Concurro
                  </h3>
                  <p className="!text-black/60 md:text-lg 2xl:text-xl">
                    University Exam Prep App
                  </p>
                </hgroup>
                <div className="flex gap-2 flex-wrap">
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    React Native
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    Typescript
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    Tailwind
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    Expo
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    SQLite
                  </p>
                </div>
                <p className="!text-black/60 group text-balance md:text-lg 2xl:text-xl lg:max-w-3/4">
                  Concurro is a mobile study companion application built with{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    react native
                  </span>{" "}
                  and{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    typescript
                  </span>
                  , designed to help Iranian students to prep smarter for
                  university entrance exam with intuitive performance tracking,
                  problem review tools and a clean UI powered by{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    tailwind
                  </span>{" "}
                  and{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    expo
                  </span>
                  .
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link>Install Application</Link>
                  <Link>Code On Github</Link>
                </div>
              </div>
              <div className="bg-purple shadow transition-all hover:shadow-hover hover:-translate-0.5 active:shadow-none active:translate-1 border-2 border-black w-full md:max-w-3/4 lg:max-w-2/5">
                <img
                  src="./projects/Concurro.png"
                  alt="showcase of the Concurro project"
                />
              </div>
            </article>

            <article className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
              <div className="space-y-2">
                <hgroup className="space-y-1">
                  <h3 className="!font-header font-bold text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
                    Open Studio
                  </h3>
                  <p className="!text-black/60 md:text-lg 2xl:text-xl">
                    Website For Open Studio Community
                  </p>
                </hgroup>
                <div className="flex gap-2 flex-wrap">
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    Svelte
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    Typescript
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    UI / UX
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    Figma
                  </p>
                </div>
                <p className="!text-black/60 group text-balance md:text-lg 2xl:text-xl lg:max-w-3/4">
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    Led the design
                  </span>{" "}
                  from concept to final UI and collaborated with the dev team to
                  implement the website in{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    svelte
                  </span>{" "}
                  and{" "}
                  <span className="font-bold !text-black/60 transition-colors group-hover:!text-black">
                    typescript
                  </span>
                  . The website embodies Open Studio's values with a welcoming
                  tone that invites new developers to join.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link>Live Website</Link>
                  <Link>Code On Github</Link>
                  <Link>Figma Design</Link>
                </div>
              </div>
              <div className="bg-purple shadow transition-all hover:shadow-hover hover:-translate-0.5 active:shadow-none active:translate-1 border-2 border-black w-full md:max-w-3/4 lg:max-w-2/5">
                <img
                  src="./projects/Open-Studio.png"
                  alt="showcase of the Open Studio project"
                />
              </div>
            </article>

            <article className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
              <div className="space-y-2">
                <hgroup className="space-y-1">
                  <h3 className="!font-header font-bold text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
                    Wikilator
                  </h3>
                  <p className="!text-black/60 md:text-lg 2xl:text-xl">
                    Technical Translator
                  </p>
                </hgroup>
                <div className="flex gap-2 flex-wrap">
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    Go
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors">
                    React
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    Typescript
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    Tailwind
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    API
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    UI / UX
                  </p>
                  <p className="border-2 border-black/60 hover:border-black px-4 py-1 !text-black/60 hover:!text-black transition-colors ">
                    Figma
                  </p>
                </div>
                <p className="!text-black/60 group text-balance md:text-lg 2xl:text-xl lg:max-w-3/4">
                  Wikilator is a web-based translator for technical terms,
                  powered by Wikipedia's multilingual dataset. The backend is
                  implemented in go, with plans to add rate limiting
                  functionality. The frontend is built with react, typescript
                  and tailwind and delivers a clean and minimal UI.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link>Code On Github</Link>
                  <Link>Figma Design</Link>
                </div>
              </div>
              <div className="bg-purple shadow transition-all hover:shadow-hover hover:-translate-0.5 active:shadow-none active:translate-1 border-2 border-black w-full md:max-w-3/4 lg:max-w-2/5">
                <img
                  src="./projects/Wikilator.png"
                  alt="showcase of the Wikilator project"
                />
              </div>
            </article>
          </div>
        </section>

        <section
          id="about"
          className="xl:mx-auto bg-yellow border-2 border-black shadow w-full space-y-4 md:flex md:items-start md:justify-between md:gap-8 px-4 py-8 xl:w-2/3"
          aria-labelledby="about-section-title"
        >
          <div className="h-50 w-full max-w-lg border-2 border-black bg-purple mx-auto"></div>
          <div className="space-y-4">
            <h2
              className="!font-header font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl"
              id="about-section-title"
            >
              Sourena Kazemi
            </h2>
            <div className="flex gap-2">
              <div className="border-2 border-black w-24 h-20 flex items-center justify-center bg-white/50 transition-all hover:shadow hover:-translate-1 active:shadow-none active:translate-0">
                <p className="flex flex-col font-bold">
                  <span className="text-lg">4+</span>
                  <span className="!text-black/60">Years</span>
                </p>
              </div>
              <div className="border-2 border-black w-24 h-20 flex items-center justify-center bg-white/50 transition-all hover:shadow hover:-translate-1 active:shadow-none active:translate-0">
                <p className="flex flex-col font-bold">
                  <span className="text-lg">10+</span>
                  <span className="!text-black/60">Projects</span>
                </p>
              </div>
            </div>
            <p className="!text-black/70 group md:text-lg 2xl:text-xl text-balance">
              Hi, I'm Sourena. My journey into coding began six years ago with
              simple games and tiny tools. Today, I'm a{" "}
              <span className="!text-black/70 group-hover:!text-black font-bold transition-colors">
                fullstack developer
              </span>{" "}
              who turns ideas into beautiful UI designs in{" "}
              <span className="!text-black/70 group-hover:!text-black font-bold transition-colors">
                Figma
              </span>
              , builds smooth and responsive frontends with{" "}
              <span className="!text-black/70 group-hover:!text-black font-bold transition-colors">
                Typescript
              </span>
              ,{" "}
              <span className="!text-black/70 group-hover:!text-black font-bold transition-colors">
                React
              </span>
              , and{" "}
              <span className="!text-black/70 group-hover:!text-black font-bold transition-colors">
                Tailwind
              </span>
              , powered behind the scenes by efficient{" "}
              <span className="!text-black/70 group-hover:!text-black font-bold transition-colors">
                Go
              </span>{" "}
              services.
            </p>
            <Link>Get In Touch</Link>
          </div>
        </section>

        <section
          id="contact"
          className="xl:mx-auto bg-purple border-2 border-black shadow w-full space-y-4 md:space-y-8 px-4 py-8 xl:w-2/3 -mt-8 md:-mt-16 xl:-mt-32"
          aria-labelledby="contact-section-title"
        >
          <h2
            className="font-bold !font-header text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl"
            id="contact-section-title"
          >
            Where To Find Me?
          </h2>
          <div className="md:flex md:gap-4 md:justify-center lg:text-lg">
            <div className="space-y-4 md:grow">
              <div className="border-2 border-black px-4 py-1 flex items-center gap-2 md:max-w-xl md:ml-auto @container hover:bg-yellow transition-all hover:shadow hover:-translate-1 active:shadow-none active:translate-0">
                <img
                  src="./mail.svg"
                  alt="email icon"
                  className="border-2 border-black p-0.5 hidden @2xs:block"
                />
                <p className="font-bold @2xs:font-normal">
                  kazemisourena@gmail.com
                </p>
              </div>
              <div className="border-2 border-black px-4 py-1 flex items-center gap-2 md:max-w-xl md:ml-auto hover:bg-yellow transition-all hover:shadow hover:-translate-1 active:shadow-none active:translate-0">
                <img
                  src="./linkedin.svg"
                  alt="email icon"
                  className="border-2 border-black p-0.5"
                />
                <a href="#">LinkedIn</a>
              </div>
            </div>
            <div className="space-y-4 md:grow mt-4 md:mt-0">
              <div className="border-2 border-black px-4 py-1 flex items-center gap-2 md:max-w-xl hover:bg-yellow transition-all hover:shadow hover:-translate-1 active:shadow-none active:translate-0">
                <img
                  src="./github.svg"
                  alt="email icon"
                  className="border-2 border-black p-0.5"
                />
                <a href="#">Github</a>
              </div>
              <div className="border-2 border-black px-4 py-1 flex items-center gap-2 md:max-w-xl hover:bg-yellow transition-all hover:shadow hover:-translate-1 active:shadow-none active:translate-0">
                <img
                  src="./blog.svg"
                  alt="email icon"
                  className="border-2 border-black p-0.5"
                />
                <a href="#">Blog</a>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center -mt-8 md:-mt-16 xl:-mt-32 lg:mb-8 xl:mb-16">
          <div className="self-center scale-[80%] sm:scale-90 lg:scale-100 xl:scale-110 2xl:scale-[120%] group">
            <KeyboardSvg />
          </div>
        </div>
      </main>
    </>
  );
}
export default Home;
