import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className="text-center font-body sm:text-left ssm:text-left md:items-center	">
    <StaticImage
      src="../images/photo_tab.png"
      quality={100}
      formats={["auto", "webp", "avif"]}
      placeholder="blurred"
      alt="XNO -  Make better connections"
      className="w-fit md:flex sm:hidden lg:hidden xl:hidden"
    />
    <div> © {new Date().getFullYear()}, XNO dating.</div>
  </footer>
)

export default Footer
