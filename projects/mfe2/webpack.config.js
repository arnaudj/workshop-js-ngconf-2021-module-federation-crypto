const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const share = mf.share;

module.exports = {
  output: {
    uniqueName: "mfe2",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "mfe2",
      filename: "remoteEntry.js",
      exposes: {
        "./Chart1": "./projects/mfe2/src/app/chart1/chart1.component.ts",
        "./Chart2": "./projects/mfe2/src/app/chart2/chart2.component.ts",
      },
      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
      }),
    }),
  ],
};
