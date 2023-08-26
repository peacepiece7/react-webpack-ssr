// https://velog.io/@sooyun9600/React-is-not-defined-에러-해결
module.exports = {
  targets: '>= 0.5%, not dead',
  presets: ['@babel/preset-env', ['@babel/preset-react'], '@babel/preset-typescript'],
  plugins: [
    '@loadable/babel-plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './src',
          '~': './server',
        },
      },
    ],
  ],
}
