import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Subscription = () => {
  //mailchimp
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState("")
  const [showFailure, setShowFailure] = useState(false)

  const _handleChange = e => {
    setEmail(e.target.value)
  }

  const _handleMailchimpSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    const result = await addToMailchimp(email)
    console.log(result)
    setIsSubmitting(false)
    if (result.result === "success") {
      setShowSuccess(result.msg)
      setEmail("")
    } else if (result.result === "error") {
      setShowFailure(true)
    }
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
      {showSuccess && <p className="text-dark text-md mt-2">{showSuccess}</p>}
      {showFailure && (
        <p className="text-dark text-md mt-2">Please try again.</p>
      )}
    </>
  )
}

export default Subscription
