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
    {/*  <div className="flex flex-row sm:flex-col lg:flex-row items-center ">
      <div className="bg-slate-500 w-1/2 ">col 1</div>
      <div className="bg-red-800 w-1/2 ">col 2</div>
    </div> */}

    <div className="flex sm:flex-col lg:flex-row flex-grow flex-wrap text-left space-y-6 sm:text-left md:text-center lg:text-left xl:text-left ">
      <div className=" sm:flex-auto sm:p-2 md:p-5 justify-start lg:w-1/2">
        <h1 className="font-body text-XNOpink text-3xl font-medium mt-20 md:mt-10 sm:text-4xl">
          Make better connections.
        </h1>
        <p className="text-dark text-xl mt-5">
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

      <div className="lg:w-1/2">
        <div className=" inline justify-items-end justify-end sm:hidden xl:flex lg:flex">
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

      <div className="md:flex	md:flex-col md:justify-center md:items-center">
        <StaticImage
          src="../images/photo_tab.png"
          quality={100}
          layout={"fixed"}
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
          alt="XNO -  Make better connections"
          className="w-max sm:hidden lg:hidden xl:hidden md:flex md:mb-10"
        />
      </div>
    </div>
    {/* <Lottie animationData={comingSoon} /> */}
  </Layout>
)

export default IndexPage
