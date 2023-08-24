const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const webpackNodeExternals = require('webpack-node-externals')
const rimraf = require('rimraf')

const getEntryPoint = (target) => {
  if (target === 'node') {
    // index.tsx or App.tsx?
    return ['./src/index.tsx']
  }
}

const getConfig = (target) => ({
  mode: 'production',
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
        test: /\.css?$/,
        exclude: [],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.jsx?$|\.tsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins:
    target === 'web'
      ? [new LoadablePlugin(), new MiniCssExtractPlugin()]
      : [new LoadablePlugin(), new MiniCssExtractPlugin()],

  externals: target === 'node' ? ['@loadable/component', webpackNodeExternals()] : undefined,
})

module.exports = [getConfig('web')]
