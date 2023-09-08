/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gons`,
    description: ``,
    author: `@lionicus`,
    // image: `/logo.png`,
    keywords: `nearshoring software development,
    nearshoring app development,
    nearshoring software development in Switzerland,
    nearshoring software development company,
    outsourcing,
    nearshore outsourcing companies,
    nearshore software outsourcing,
    nearshore software development outsourcing,
    alternatives to nearshore software development outsourcing,
    software development team,
    software development Switzerland,
    app development Switzerland 
    `,
    siteUrl: `https://www.gons.rs.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -40,
      },
    },
  ],
};
