const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      extensions: ['.ios.js', '.android.js', '.js', '.json'],
      root: ['./src'],
      alias: {
        components: './src/components',
        screens: './src/screens',
        config: './src/config',
        actions: './src/actions',
        constants: './src/constants',
        helpers: './src/helpers',
        images: './src/images',
        reducers: './src/reducers',
        store: './src/store',
        utils: './src/utils',
        saga: ['src/saga'],
        libraries: './src/libraries',
        controllers: './src/controllers',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...commonPlugins],
};
