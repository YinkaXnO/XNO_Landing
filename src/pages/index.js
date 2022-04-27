import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Lottie from "lottie-react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import comingSoon from "../images/comingSoon.json"
import Social from "../components/social"
import Downloads from "../components/downloadBtn"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-col min-h-screen font-body">
      <div className="flex-grow">
        <div className="flex-auto w-1/2">
          <h1 className="font-body text-XNOpink text-4xl font-medium mb-5 ">
            Make better connections.
          </h1>
          <p className="text-dark text-xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labor.
          </p>
          <div className="pt-7 pb-7 mt-5 mb-5 flex flex-col">
            <form className="flex">
              <input
                className="text-xl font-medium w-full max-w-x rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                placeholder="your@mail.com"
              />
              <button className="w-1/2 px-8 rounded-r-lg bg-XNOyellow text-dark font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
                <p className="sm:text-sm">Sign up</p>
              </button>
            </form>
          </div>
          <div className="md:items-center sm:justify-center flex lg:justify-start">
            <Social className="sm:text-lg sm:w-3 " />
          </div>
          <div>
            <Downloads />
          </div>
        </div>
        <div className="flex-auto ">
          <div className=" inline justify-items-end justify-end sm:hidden xl:flex ">
            {" "}
            <StaticImage
              src="../images/photo_grid.png"
              width={450}
              quality={95}
              formats={["auto", "webp", "avif"]}
              placeholder="blurred"
              alt="XNO -  Make better connections"
              style={{ marginBottom: `2rem` }}
            />
          </div>
        </div>
      </div>
    </div>

    {/* <Lottie animationData={comingSoon} /> */}

    {/*  <div className="flex flex-grow font-body gap-x-32 justify-evenly sm:flex-col lg:flex-grow flex-col">
      <div className="xl:basis-1/2 sm:basis-full sm:space-y-20 ">
        <div className="grow-0 text-left">
          {" "}
          <StaticImage
            src="../images/XNO_logo.svg"
            quality={100}
            formats={["auto", "webp", "avif"]}
            placeholder="tracedSVG"
            alt="XNO -  Make better connections"
            layout="constrained"
            className="sm:mt-4 w-80 ssm:mt-4"
          />
        </div>
        <div>
          <h1 className="font-body text-XNOpink text-4xl font-medium mb-5 ">
            Make better connections.
          </h1>
          <p className="text-dark text-xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labor.
          </p>
          <div className="pt-7 pb-7 mt-5 mb-5 flex flex-col">
            <form className="flex">
              <input
                className="text-xl font-medium w-full max-w-x rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                placeholder="your@mail.com"
              />
              <button className="w-1/2 px-8 rounded-r-lg bg-XNOyellow text-dark font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
                <p className="sm:text-sm">Sign up</p>
              </button>
            </form>
          </div>
          <div className="md:items-center sm:justify-center flex lg:justify-start">
            <Social className="sm:text-lg sm:w-3 " />
          </div>
          <div>
            <Downloads />
          </div>
        </div>
      </div>
      <div className=" inline justify-items-end justify-end sm:hidden xl:flex ">
        {" "}
        <StaticImage
          src="../images/photo_grid.png"
          width={450}
          quality={95}
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
          alt="XNO -  Make better connections"
          style={{ marginBottom: `2rem` }}
        />
      </div>
    </div> */}

    {/*     <div className="pt-7 pb-7 mt-5 mb-5 flex flex-col">
      <form className="flex">
        <input
          className="text-xl font-medium w-full max-w-x rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="your@mail.com"
        />
        <button className="w-1/2 px-8 rounded-r-lg bg-XNOyellow text-dark font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
          <p className="sm:text-sm">Sign up</p>
        </button>
      </form>
    </div> */}

    {/*     <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
