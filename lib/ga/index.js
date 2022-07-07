// log the pageview with their URL
require("@nomiclabs/hardhat-etherscan")
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

export const pageview = (url) => {
	window.gtag('config', privateKey, {
	  page_path: url,
	})
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
	window.gtag('event', action, params)
  }
  