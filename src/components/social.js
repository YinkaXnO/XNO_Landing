import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Social = ({ Social }) => {
  return (
    <div className="flex justify-start gap-10 md:items-center">
      <div>
        {" "}
        <StaticImage
          src="../images/Twitter.svg"
          width={40}
          quality={100}
          placeholder="tracedSVG"
          formats={["auto", "webp", "avif"]}
          alt="XNO -  Make better connections"
        />
      </div>
      <div>
        {" "}
        <StaticImage
          src="../images/InstaG.svg"
          width={40}
          quality={95}
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
          alt="XNO -  Make better connections"
        />
      </div>
      <div>
        {" "}
        <StaticImage
          src="../images/Facebook.svg"
          width={40}
          quality={95}
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
          alt="XNO -  Make better connections"
        />
      </div>
    </div>
  )
}

Social.defaultProps = {
  Social: "Under construction",
}

export default Social
