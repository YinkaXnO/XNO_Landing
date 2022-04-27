import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Terms and Conditions" />
    <h1>Terms and Conditions</h1>
    <div>
      <p>
        Terms and Conditions By creating an account on Xno either through a
        mobile device, mobile application, or computer you agree to be bound by
      </p>{" "}
      <p>(i) Terms of use </p>
      <p>
        (ii) Our privacy policy, cookie policy, and guidelines of community
        which are incorporated by reference into this Agreement, and
      </p>
      <p>
        (iii) any terms revealed and agreed to by you if you purchase additional
        features, products, or services we present to the customers.
        <p>
          If you are not willing to accept and agree to be bound by all of the
          terms of this Agreement, you are not eligible to make use of our
          services.
        </p>
        <p>
          Via Xno our customers avail the opportunity to meet friends all over
          the world that are as per their match. Xno is not responsible for any
          misconduct conducted by either party as the use of our application is
          for 18+ or individuals with emotional maturity. Xnos community
          guidelines do not extend to restrictions but rather for grown-ups.
          There are no subjections with regards to gender, sex, LGBT, singles,
          and couples rather Xno aims to build exclusive matches.{" "}
        </p>
        <p>
          DISCLAIMER:- Users are entirely responsible on their own for
          interactions with other members. No is not responsible with regards to
          relations,trust,commitment,long term relationships, friends or any
          other form of connection.
        </p>
      </p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
