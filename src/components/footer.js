import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className="text-center font-body sm:text-center ssm:text-left md:flex	md:flex-col md:justify-center md:items-center">
    {/*    <div>
      <StaticImage
        src="../images/photo_tab.png"
        quality={100}
        layout={"fixed"}
        formats={["auto", "webp", "avif"]}
        placeholder="blurred"
        alt="XNO -  Make better connections"
        className="w-max sm:hidden lg:hidden xl:hidden md:flex md:mb-10"
      />
    </div> */}
    <div className="text-center">
      {" "}
      © {new Date().getFullYear()}, XNO dating.
    </div>
  </footer>
)

export default Footer
