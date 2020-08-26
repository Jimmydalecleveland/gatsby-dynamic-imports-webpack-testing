const path = require('path')
const pageData = require('./pageData/pages')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions
}) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerPort: 8889,
          analyzerMode: "static",
        })
      ]
    })
  }
}
 
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: path.resolve('./src/templates/Root.js'),
    context: {
      pageData
    }
  })

  console.log("============== Page Data ================\n")
  pageData.forEach(page => {
    console.log(page)

    createPage({
      path: page.slug,
      component: path.resolve('./src/templates/Default.js'),
      context: {
        page
      }
    })
  })
}