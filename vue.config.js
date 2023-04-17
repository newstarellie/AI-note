const { defineConfig } = require("@vue/cli-service");
const { DefinePlugin } = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __VUE_I18N_PROD_DEVTOOLS__: false,
      }),
    ],
    experiments: {
      topLevelAwait: true
    }
  },
});
