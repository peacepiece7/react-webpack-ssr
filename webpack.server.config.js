const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV ?? 'development',
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  resolve: {
    // ? server에서 tsx, jsx를 다루는 경우가 생길지 확인해야함
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: {
    index: path.resolve(__dirname, 'server', 'index.ts'),
    // main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$|\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: [webpackNodeExternals()],
}
