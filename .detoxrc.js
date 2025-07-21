/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: "jest",
  runnerConfig: "e2e/config.json",
  configurations: {
    "ios.sim.debug": {
      type: "ios.simulator",
      binaryPath:
        "ios/build/Build/Products/Debug-iphonesimulator/PollinationProdigy.app",
      build:
        "xcodebuild -workspace ios/PollinationProdigy.xcworkspace -scheme PollinationProdigy -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      device: {
        type: "iPhone 15 Pro Max",
      },
    },
    "ios.sim.release": {
      type: "ios.simulator",
      binaryPath:
        "ios/build/Build/Products/Release-iphonesimulator/PollinationProdigy.app",
      build:
        "xcodebuild -workspace ios/PollinationProdigy.xcworkspace -scheme PollinationProdigy -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
      device: {
        type: "iPhone 15 Pro Max",
      },
    },
    "android.emu.debug": {
      type: "android.emulator",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      build:
        "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
      device: {
        avdName: "Pixel_7_API_34",
      },
    },
    "android.emu.release": {
      type: "android.emulator",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
      build:
        "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..",
      device: {
        avdName: "Pixel_7_API_34",
      },
    },
  },
};
