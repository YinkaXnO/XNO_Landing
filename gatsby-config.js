module.exports = {
  siteMetadata: {
    title: `XnO`,
    description: `Make better connections.`,
    author: `@xno`,
    siteUrl: `https://xno.dating/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `ffffff`,
        display: `minimal-ui`,
        icon: `src/images/XNO_reverse.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        // endpoint: "",
        endpoint:
          "https://dating.us13.list-manage.com/subscribe/post?u=fc26aed8c9818327a0cce0259&amp;id=7b70410bea",
        // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
}
