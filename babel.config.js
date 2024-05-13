module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './App',
          '@commons': './src/@commons',
          '@modules': './src/modules',
        },
      },
    ],
  ],
};
