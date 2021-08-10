module.exports = {
    siteMetadata: {
        title: "Yoobni Blog!",
    },
    pathPrefix: "yoobni.github.io",
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
    ],
}
