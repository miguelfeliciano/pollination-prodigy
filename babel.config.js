module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
            "@/components": "./src/components",
            "@/screens": "./src/screens",
            "@/navigation": "./src/navigation",
            "@/store": "./src/store",
            "@/services": "./src/services",
            "@/utils": "./src/utils",
            "@/constants": "./src/constants",
            "@/types": "./src/types",
            "@/data": "./src/data",
            "@/assets": "./assets",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
