import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="mt-24 md:mt-1 sm:mt-5 flex md:justify-center lg:justify-start p-5">
    <StaticImage
      src="../images/XNO_logo.svg"
      quality={100}
      formats={["auto", "webp", "avif"]}
      placeholder="tracedSVG"
      alt="XNO -  Make better connections"
      layout="constrained"
      className="sm:mt-4 w-80 ssm:mt-4 mb-8 sm:w-80 md:w-96 "
    />
  </header>
  /*   <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> 
  </header> */
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
