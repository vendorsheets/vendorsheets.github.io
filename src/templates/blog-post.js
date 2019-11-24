import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import johnny from "../images/johnny.jpg"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout backgroundColor="light-gray">
      <div className="pt2 mw0 mw7-ns center">
        <div className="f4 black b pb4">
          <Link to="/blog" className="link black bb bw2">{"< Blog"}</Link>
        </div>
        <div className="flex items-center">
          <div className="flex pr3 items-center">
            <img className="br-100 ba bw2 h3" src={johnny} />
          </div>
          <div>
            <div className="f5 b pb2">{post.frontmatter.author}</div>
            <div className="f6">{`${post.timeToRead} min read • ${post.frontmatter.date}`}</div>
          </div>
        </div>
        <h1 className="title f1">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        author
        date(formatString: "DD MMMM, YYYY")
      }
      timeToRead
    }
  }
`
