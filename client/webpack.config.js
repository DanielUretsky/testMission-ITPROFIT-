const path = require('path');
const webpackBuild = require('./buildConfigs/webpack/webpack.build');

module.exports = (env) => {
    console.log(env);
    
    const paths = {
        entry: path.resolve(__dirname, 'src/js', 'index.js'),
        output: path.resolve(__dirname, 'build'),
        public: path.resolve(__dirname, 'public', 'index.html')
    }

    const options = {
        port: env.port || 3000,
        mode: env.mode,
        paths

    }
    const config = webpackBuild(options);
    return config;
}