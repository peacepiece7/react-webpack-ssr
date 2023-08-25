const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const webpackNodeExternals = require('webpack-node-externals')

const devMode = process.env.NODE_ENV !== 'production'
const hotMiddlewareScript = `webpack-hot-middleware/client?name=web&log=false&reload=true`

const getEntryPoint = (target) => {
  if (target === 'node') {
    return ['./src/index.tsx']
  }
  return devMode ? [hotMiddlewareScript, './src/index.tsx'] : ['./src/index.tsx']
}

const getConfig = (target) => {
  return {
    mode: devMode ? 'development' : 'production',
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
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    plugins:
      target === 'web'
        ? [new webpack.HotModuleReplacementPlugin(), new LoadablePlugin(), new MiniCssExtractPlugin()]
        : [new LoadablePlugin(), new MiniCssExtractPlugin()],

    // node환경에서 npm pacakge는 제외하지만, node_modules/@loadable/component는 서버에서 사용되기 때문에 제외하지 않음
    externals: target === 'node' ? ['@loadable/component', webpackNodeExternals()] : undefined,
  }
}

module.exports = [getConfig('web'), getConfig('node')]
