import React from "react"
import Layout from "../components/layout"

const ArticleCard = () => (
  <section className="pa4 br3 bg-near-white">
    <h2 className="mt0">Article title</h2>
    <p className="f5 lh-copy">
      This is a description of the article
    </p>
    <p className="f6 ma0">
      Johnny Fayad on November 23, 2019
    </p>
  </section>
)

export default () => (
  <Layout>
    <div className="flex">
      <div className="pa4 flex-1">
        <div className="f5 lh-title mb3 fw9">vendorsheets.</div>
        <div className="mw5 mw7-ns center">
          <div className="f2 lh-title mb3 fw9">Blog</div>
          {
            [1, 2, 3].map((value, index) => (
              <div className={index === 0 ? "" : "pt3"}>
                <ArticleCard />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </Layout>
);
