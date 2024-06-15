export default {
  "expo": {
    "name": "puddle",
    "slug": "puddle",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "plugins": [
      "@react-native-google-signin/google-signin"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.native.puddle",
      "googleServicesFile": process.env.GOOGLE_SERVICES_INFOPLIST
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.native.puddle",
      "googleServicesFile": process.env.GOOGLE_SERVICES__JSON
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "cbceba76-54b0-4fea-9b37-01d9ff58cc4f"
      }
    }
  }
}
