# Squad Mobile

1. [Installation](#installation)
2. [Dependencies](#dependencies)
3. [Development](#development)
4. [Testing](#testing)
5. [Deployment](#deployment)


## Installation

### Install the react-native cli
```sh
npm install -g react-native-cli
```

### Then, install local dependencies (note: node v5 is recommended)
```sh
npm install
```

## Dependencies

Make sure you have the following external dependencies installed. These will not be installed via the npm package manager.

- Android SDK Build-tools version 23.0.1
- Android 6.0 (API 23) SDK Platform
- Android Support Repository
- XCode 7.0+

For Android installation, refer to [this guide](https://facebook.github.io/react-native/docs/android-setup.html).

## Development

```
# Builds and runs Android app
react-native run-android
```
_NOTE: This script assumes a physical device or Genymotion is used. In order to run it on the emulator provided with the Android SDK, use ```cordova emulate android```. For a physical device, remember to run ```adb reverse tcp:8081 tcp:8081``` first._

```
# Opens the project with XCode, with which you can build and run
open ios/SquadMobile.xcodeproj
```

```
# Lint the code using eslint
npm run lint
```

## Testing

*TODO*


## Deployment

*TODO*

---
## SURPRISE
![asdf](http://i.imgur.com/8R1L6HW.gif?1)
