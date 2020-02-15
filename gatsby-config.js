module.exports = {
  siteMetadata: {
    title: `vendorsheets.`,
    description: `Hundreds of retailers. One form. Enter your information once. We'll format it for Whole Foods, Kroger, and more. No spreadsheets required.`,
    url: `https://www.vendorsheets.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Muli\:400,900`,
        ],
      }
    }
  ],
}
