import React, { useState, createRef } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import ReCAPTCHA from "react-google-recaptcha"

const Subscription = () => {
  //mailchimp
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState("")
  const [showFailure, setShowFailure] = useState(false)
  const [token, setToken] = useState("")

  const _handleChange = e => {
    setEmail(e.target.value)
  }

  const _handleMailchimpSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      if (token) {
        const result = await addToMailchimp(email)
        setIsSubmitting(false)
        if (result.result === "success") {
          setShowSuccess(result.msg)
          setEmail("")
        } else if (result.result === "error") {
          setShowFailure(true)
        }
      } else {
        setIsSubmitting(false)
        setShowFailure(true)
      }
    } catch (err) {
      console.log(err.message)
      setIsSubmitting(false)
      setShowFailure(true)
    }
  }

  const onChange = token => {
    setToken(token)
  }

  return (
    <>
      <form className="flex" onSubmit={event => _handleMailchimpSubmit(event)}>
        <input
          className="text-xl font-medium w-full max-w-x rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="your@mail.com"
          type="email"
          name="email"
          value={email}
          onChange={event => _handleChange(event)}
          required
        />
        <button
          className="w-1/2 px-8 rounded-r-lg bg-XNOyellow text-dark font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
          disabled={isSubmitting}
        >
          <p className="sm:text-sm">
            {isSubmitting ? "Submitting" : "Sign up"}
          </p>
        </button>
      </form>
      <ReCAPTCHA
        style={{
          marginTop: "5px",
          transform: "scale(0.77)",
          transformOrigin: "0 0",
        }}
        sitekey="6Lc8AwogAAAAALcx1EiCLeU--6Nq-OgdRa11BSQH"
        onChange={onChange}
      />
      {showSuccess && <p className="text-dark text-md mt-2">{showSuccess}</p>}
      {showFailure && (
        <p className="text-dark text-md mt-2">Please try again.</p>
      )}
    </>
  )
}

export default Subscription
