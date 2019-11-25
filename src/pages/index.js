import React from "react"
import Layout from "../components/layout"

import "./index.css"

export default () => (
  <div className="flex">
    <div className="flex-1">
      <Layout>
        <div className="flex" style={{ justifyContent: 'space-around' }}>
          <div className="pa4-ns flex-1">
            <div>
              <div className="f2 lh-title">Hundreds of retailers.</div>
              <div className="f2 lh-title mb3 fw9">One form.</div>
              <div className="f4 lh-copy mb4">
                Enter your information once. We'll format it for Whole Foods, Star Market and more. No spreadsheets required.
              </div>
              <form className="mw6 signup-form" action="https://formspree.io/form@vendorsheets.com" method="POST">
                <input
                  className="f6 input-reset ba br1 pv2 ph2 mb1 w-50 mb2 name-input first-name-input"
                  type="text"
                  placeholder="First Name"
                  name="first"
                />
                <input
                  className="f6 input-reset ba br1 pv2 ph2 mb1 w-50 mb2 name-input last-name-input"
                  type="text"
                  placeholder="Last Name"
                  name="last"
                />
                <input
                  className="f6 input-reset ba br1 pv2 ph2 mb1 w-100 mb2 email-input"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                />
                <input
                  className="f6 input-reset ba br1 pv2 ph2 mb1 w-100 mb2 brand-input"
                  type="text"
                  placeholder="Brand"
                  name="brand"
                />
                <input
                  className="f6 input-reset ba br1 pv2 ph2 mb1 w-100 mb3 upc-input"
                  type="text"
                  placeholder="Top Selling UPC"
                  name="_subject"
                />
                <input
                  className="input-reset bg-green white f6 pv2 ph3 ba br1 b--green w-100 pointer"
                  type="submit"
                  value="Notify Me"
                />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
    <div className="vh-100 cover dn db-ns flex-1 stock-bg"></div>
  </div>
);
