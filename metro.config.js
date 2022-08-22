const {getDefaultConfig} = require('metro-config');

const path = require('path');
const watchFolders = [
  //Relative path to packages directory because I'm in yarn workpspaces
  path.resolve(__dirname),
];

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          // this defeats the RCTDeviceEventEmitter is not a registered callable module
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      extraNodeModules: {},
    },
    watchFolders,
  };
})();
