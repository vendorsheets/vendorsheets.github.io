import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default ({ backgroundColor="white", children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>vendorsheets.</title>
      <link rel="canonical" href="http://www.vendorsheets.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <script>{`
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-93050983-1', 'auto');
        ga('send', 'pageview');
      `}</script>
    </Helmet>
    <div className={`flex bg-${backgroundColor}`}>
      <div className="pa4 w-100">
        <div className="f5 lh-title mb3 fw9"><Link to="/" className="black link">vendorsheets.</Link></div>
        {children}
      </div>
    </div>
  </div>
)
