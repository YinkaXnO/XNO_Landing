import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const DownloadBtn = ({ DownloadBtn }) => {
  return (
    <div className="flex justify-start sm:justify-center lg:justify-start flex-wrap gap-10 mt-10 sm:mb-14">
      <div>
        {" "}
        <StaticImage
          src="../images/ios.svg"
          quality={100}
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
          alt="XNO -  Make better connections"
          className="w-52 "
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
          className="w-52 "
        />
      </div>
    </div>
  )
}

export default DownloadBtn
