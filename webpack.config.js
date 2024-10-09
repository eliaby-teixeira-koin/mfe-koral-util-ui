const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "koin",
    projectName: "mfe-koral-util-ui",
    webpackConfigEnv,
    argv,
  });

  // modify the webpack config however you'd like to by adding to this object
  return merge(defaultConfig, {
    // resolve: {
    //   alias: {
    //     components: path.resolve(__dirname, "src/components"),
    //   },
    // },
  });
};
