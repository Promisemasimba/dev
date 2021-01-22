const urljoin = require("url-join");
const siteConfig = require("./siteConfig");
module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    author: siteConfig.author,
    description: siteConfig.description,
    siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
    social: {
      twitter: siteConfig.twitter,
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/src/assets/scss/', 'node_modules/gatsby-source-wordpress-experimental/style.css'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "#",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/img",
      },
      __key: "images",
    },
  ],
};
