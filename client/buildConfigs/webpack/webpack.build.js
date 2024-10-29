const { devServerBuild } = require("./devServer.build.js");
const { pluginsBuild } = require("./plugins.build.js");
const { rulesBuild } = require("./rules.build.js");


const webpackBuild = (options) => {
    const {mode, paths} = options;

    return {
        mode: options.mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: rulesBuild(options),
        },
        plugins: pluginsBuild(options),
        devServer: mode === 'development' ? devServerBuild(options) : undefined
    }
}

module.exports = webpackBuild;