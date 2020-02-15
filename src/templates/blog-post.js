import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout backgroundColor="light-red">
      <div className="pt2 mw0 mw7-ns center">
        <Link to="/blog" className="link dim f4 b mb4 db">{"< Blog"}</Link>
        <div className=" pa4 br3 ba bw2 bg-white">
          <div className="flex items-center">
            <div className="f6">{`${post.timeToRead} min read • ${post.frontmatter.date}`}</div>
          </div>
          <h1 className="title f1">{post.frontmatter.title}</h1>
          <div className="f5 lh-copy" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      timeToRead
    }
  }
`
