module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    outputDir: 'docs',
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import  "~@/assets/scss/style.scss";`,
            },
        },
    },
}