const webpack = require('webpack');

module.exports = function override(config, env) {
    // Set fallbacks for certain Node.js globals and modules
    config.resolve.fallback = {
        ...config.resolve.fallback, // Spread in existing fallbacks if they exist
        process: require.resolve('process/browser'), // Added this line
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    };

    // Provide the fallbacks for the bundling process
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}
