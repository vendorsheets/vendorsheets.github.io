import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const ArticleCard = ({ title, excerpt, author, date }) => (
  <section className="pa4 br3 ba bw2 bg-white">
    <h2 className="mt0">{title}</h2>
    <p className="f5 lh-copy">
      {excerpt}
    </p>
    <p className="f6 ma0">
      {date}
    </p>
  </section>
);

export default ({ data }) => (
  <Layout backgroundColor="light-red">
    <div className="mw7-ns center">
      <div className="f2 lh-title mb3 fw9">Blog</div>
      {
        data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div key={node.id} className={index === 0 ? "" : "pt3"}>
            <Link className="link dim" to={node.fields.slug}>
              <ArticleCard
                title={node.frontmatter.title}
                excerpt={node.excerpt}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
              />
            </Link>
          </div>
        ))
      }
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
