import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

import "./index.css"


const scriptURL = 'https://script.google.com/macros/s/AKfycbz_0tQJcLW-O0S_lFf-a89QdZsYZcLLpgpst0X3gq9MGL38rw/exec';

const FRUITS = ["🍎", "🍌", "🍇"];

const submitButton = (
  <input
    className="input-reset bg-green white f6 pv2 ph3 ba br1 b--green w-100 pointer"
    type="submit"
    value="Notify Me"
  />
);

const getLoadingButton = (fruit) => (
  <input
    className="input-reset bg-green white f6 pv2 ph3 ba br1 b--green w-100"
    type="submit"
    value={fruit}
    disabled={true}
  />
);

const successButton = (
  <input
    className="input-reset bg-blue white f6 pv2 ph3 ba br1 b--blue w-100"
    type="submit"
    value="👍"
    disabled={true}
  />
);

const failedButton = (
  <input
    className="input-reset bg-red white f6 pv2 ph3 ba br1 b--red w-100"
    type="submit"
    value="Something went wrong. Click to try again"
  />
);

export default () => {
  const [requestState, setRequestState] = useState("INITIAL");
  const [loadingFruitIndex, setLoadingFruitIndex] = useState(0);

  useEffect(() => {
    let id = setInterval(
      () => setLoadingFruitIndex((loadingFruitIndex + 1) % 3),
      400,
    );

    return () => clearInterval(id);
  })

  const sendToSheet = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    setRequestState("LOADING");

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => setRequestState("SUCCESS"))
      .catch(error => {
        setRequestState("FAILED");
        console.error('Error', error.message)
      });
  };

  const getSubmitButton = () => {
    switch(requestState) {
      case "LOADING":
        return getLoadingButton(FRUITS[loadingFruitIndex]);
      case "SUCCESS":
        return successButton;
      case "FAILED":
        return failedButton;
      default:
        return submitButton;
    }
  }

  return (
    <div className="flex">
      <div className="flex-1">
        <Layout>
          <div className="flex" style={{ justifyContent: 'space-around' }}>
            <div className="pa4-ns flex-1">
              <div>
                <div className="f2 lh-title">Hundreds of retailers.</div>
                <div className="f2 lh-title mb3 fw9">One form.</div>
                <div className="f4 lh-copy mb4">
                  Enter your information once. We'll format it for Whole Foods, Kroger, and more. No spreadsheets required.
                </div>
                <form className="mw6 signup-form" onSubmit={sendToSheet}>
                  <input
                    className="f6 input-reset ba br1 pv2 ph2 mb1 w-50 mb2 name-input first-name-input"
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                  />
                  <input
                    className="f6 input-reset ba br1 pv2 ph2 mb1 w-50 mb2 name-input last-name-input"
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
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
                    name="upc"
                  />
                  { getSubmitButton() }
                </form>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <div className="vh-100 cover dn db-ns flex-1 stock-bg"></div>
    </div>
  );
}
