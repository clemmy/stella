# Squad Mobile

1. [Installation](#installation)
2. [Dependencies](#dependencies)
3. [Development](#development)
4. [Testing](#testing)
5. [Deployment](#deployment)


## Installation

```sh
cd reapp-squad && npm install
```

## Dependencies

Make sure you have the following external dependencies installed. These will not be installed via the npm package manager.

- SDK Platform for android-22
- Android SDK Platform-tools
- Android SDK Build-tools

## Development

### Inside the reapp-squad directory
```
# Start the web interface on localhost:3010
npm run start
```

```
# Prepares Android files for building in Cordova
npm run prepare-android
```

```
# Prepares iOS files for building in Cordova
npm run prepare-ios
```

### Inside the reapp-squad directory
```
# Builds and runs Android app
npm run android
```
_NOTE: This script assumes a physical device or Genymotion is used. In order to run it on the emulator provided with the Android SDK, use ```cordova emulate android```_

```
# Builds and runs iOS app
npm run ios
```

## Testing

*TODO*


## Deployment

*TODO*
