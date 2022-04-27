import React from "react"

const InnerContainer = ({ children }) => (
  <div
    style={{ margin: "0 auto", maxWidth: 1366, width: "100%" }}
    className="flex flex-col min-h-screen "
  >
    {children}
  </div>
)
export default InnerContainer
