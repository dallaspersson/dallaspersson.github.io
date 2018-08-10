module.exports = {
  siteMetadata: {
    title: 'dallaspersson.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'markdown-pages',
      },
    },
  ],
}
