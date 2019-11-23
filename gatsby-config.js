module.exports = {
  siteMetadata: {
    title: `vendorsheets.`
    description: `Hundreds of retailers. One form. Enter your information once. We'll format it for Whole Foods, Star Market and more. No spreadsheets required.`,
    url: `https://www.vendorsheets.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          {
            family: `Muli`,
            variants: [`400`, `900`]
          },
        ],
      }
    }
  ],
}
