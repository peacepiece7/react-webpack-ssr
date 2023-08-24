const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackNodeExternals = require('webpack-node-externals')
const LoadablePlugin = require('@loadable/webpack-plugin')
const rimraf = require('rimraf')

module.exports = (e, r) => {
  // rimraf.sync(path.resolve(__dirname, 'dist-server'))
  return {
    target: 'node',
    node: false, // it enables '__dirname' in files. If is not, '__dirname' always return '/'.
    mode: r.mode,
    devtool: r.mode ? false : 'inline-source-map',
    entry: {
      index: path.resolve(__dirname, 'server', 'index.ts'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$|\.tsx?$/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    externals: [webpackNodeExternals()],
    // plugins: [new LoadablePlugin(), , new MiniCssExtractPlugin()],
    // externals: ['@loadable/component', webpackNodeExternals()],
  }
}
