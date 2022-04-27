import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const DownloadBtn = ({ DownloadBtn }) => {
  return (
    <div className="flex justify-start flex-wrap gap-10 md:items-center sm:justify-center ssm:justify-center mt-10">
      <div>
        {" "}
        <StaticImage
          src="../images/ios.svg"
          quality={100}
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
          alt="XNO -  Make better connections"
          className="w-48 sm:w-72 ssm:w-72"
        />
      </div>
      <div>
        {" "}
        <StaticImage
          src="../images/android.svg"
          quality={95}
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
          alt="XNO -  Make better connections"
          className="w-48 sm:w-72 ssm:w-72"
        />
      </div>
    </div>
  )
}

export default DownloadBtn
