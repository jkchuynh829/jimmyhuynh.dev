require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Jimmy Huynh`,
    siteTitleAlt: `Jimmy Huynh - Full Stack Engineer`,
    siteHeadline: `Jimmy Huynh - Full Stack Engineer`,
    siteUrl: `https://jimmyhuynh.dev`,
    siteDescription: `Jimmy Huynh's personal website and blog.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Jimmy Huynh`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Resume`,
            slug: `/resume`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://linkedin.com/in/jimmy-huynh`,
          },
          {
            name: `Github`,
            url: `https://www.github.com/jkchuynh829`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
