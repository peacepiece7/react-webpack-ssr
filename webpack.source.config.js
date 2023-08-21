const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV ?? 'development',
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  resolve: {
    // ? server에서 tsx, jsx를 다루는 경우가 생길지 확인해야함
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: {
    // index: path.resolve(__dirname, 'server', 'index.ts'),
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    // ? server에서 css를 다루는 경우가 생길지 확인해야함
    // * 서버 파일은 aggrify를 하지 않아도 됨
    rules: [
      {
        test: /\.css?$/,
        exclude: [],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.jsx?$|\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: false,
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new LoadablePlugin({ publicPath: 'dist' }),
  ],
}
