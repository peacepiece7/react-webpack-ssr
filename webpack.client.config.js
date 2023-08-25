const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const webpackNodeExternals = require('webpack-node-externals')
const rimraf = require('rimraf')

const devMode = process.env.NODE_ENV !== 'production'
const hotMiddlewareScript = `webpack-hot-middleware/client?name=web&reload=true`

const getEntryPoint = (target) => {
  if (target === 'node') {
    // index.tsx or App.tsx?
    return ['./src/index.tsx']
  }
  return devMode ? [hotMiddlewareScript, './src/index.tsx'] : ['./src/index.tsx']
}

const getConfig = (target) => ({
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  name: target,
  target,
  entry: getEntryPoint(target),
  output: {
    path: path.resolve(__dirname, `dist/${target}`),
    filename: '[name].js',
    publicPath: '/web/',
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$|\.tsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css?$/,
        exclude: [],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins:
    target === 'web'
      ? [new LoadablePlugin(), new MiniCssExtractPlugin(), new webpack.HotModuleReplacementPlugin()]
      : [new LoadablePlugin(), new MiniCssExtractPlugin()],

  // node환경에서 npm pacakge는 제외하지만, node_modules/@loadable/component는 제외하지 않음
  externals: target === 'node' ? ['@loadable/component', webpackNodeExternals()] : undefined,
})

module.exports = [getConfig('web'), getConfig('node')]
