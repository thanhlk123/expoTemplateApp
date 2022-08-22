module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            components: './src/components/',
            utils: './src/utils/',
            screens: './src/screens/',
            constants: './src/constants/',
            assets: './src/assets/',
            actions: './src/redux/actions/',
            sagas: './src/redux/sagas/',
            reducers: './src/redux/reducers/',
            selectors: './src/redux/selectors/',
            services: './src/services/',
            helpers: './src/helpers/',
            parses: './src/redux/parses/',
            store: './src/redux/store/',
            language: './src/i18n/',
            actionsType: './src/redux/actionsType',
          },
        },
      ],
    ],
  };
};
