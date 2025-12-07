# React Native Template (Expo Dev Client • TypeScript • 2025)

A reusable, production-ready React Native project template designed for fast, clean development using **Expo Dev Client**, **TypeScript**, and **EAS** builds.  
This template avoids Expo Go entirely, by using Expo Dev Client, ensuring full support for custom native modules.

---

## Philosophy of This Template

### 1. No Expo Go — Dev Client Only
Expo Go cannot load custom native modules.  
This project uses **expo-dev-client** from the start so you can safely add:
- Google Sign-In  
- Reanimated  
- FastImage  
- Any native libraries you need

### 2. Stability First
Includes the minimal dependencies used in most real-world apps:
- React Navigation  
- Screens & Safe Area Context  
- Async Storage  
- Vector Icons  
- Reanimated (optional but recommended)

### 3. TypeScript Everywhere
Strict TypeScript with path aliases for cleaner imports.

### 4. Predictable, Repeatable Builds
Following the EAS + prebuild workflow ensures consistent builds across emulators and real devices.

### 5. Fast Iteration
Once the Dev Client is installed on your device, most development uses:

## Create a New App Using This Template

```bash
npx create-expo-app@latest my-app --template expo-template-blank-typescript
cd my-app
```

Sets up a fresh Expo app with TypeScript support.

## Install Expo Dev Client

```bash
npx expo install expo-dev-client
```

Allows the app to run as a standalone development client, instead of using Expo Go.

## Run on Android to Check Initial Build Works

```bash
npx expo run:android
```

Allows the app to run as a standalone development client in Android Studio. Ensures Dev Client installs correctly and that hot reloads work.

## Reset Git (Optional)

```bash
rmdir /s /q .git
```

Or simply delete the .git folder in your root directory.

## Install Core Dependencies

```bash
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install react-native-screens
npm install react-native-safe-area-context
npm install @expo/vector-icons
npm install @react-native-async-storage/async-storage
npm install react-native-reanimated # optional
npx expo install react-native-gesture-handler
npx expo install react-native-screens react-native-safe-area-context
```

## Re-run After Dependencies

```bash
npx expo run:android
```

Re-run your build on Android to check that it works with the new dependencies. If this works, you’re through the worst of it. Side note, if working on Windows, remember that path lengths can cause compile errors, so keep your path names short and sweet.

## Prebuild for Native Platforms (Required for EAS)

```bash
npx expo prebuild # Generates iOS & Android projects
npx expo prebuild --clean # Optional: removes existing native folders first if adding native modules or modifying app.json
```

Required for Expo Dev Client EAS builds.

## Project Health Check

```bash
npx expo-doctor
```

Fix any issues. For example, EAS CLI may be missing. If so:

```bash
npm install -g eas-cli
```

## Login to Expo (Required for EAS)

```bash
npx expo login
```

## Configure EAS (eas.json)

Create an eas.json file in your project root:

```json
{
  "cli": {
    "version": ">= 11.0.0",
    "appVersionSource": "local"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

Note: appVersionSource: "local" avoids future versioning warnings.

## Development Build

For development builds, run:

```bash
npx expo prebuild
npx eas build --profile development --platform android
```

This will give you a QR code, which generates a development APK. Install it on your device, and after that use:

```bash
npx expo start --dev-client
```

This will save you having to re-build your app with EAS every time you make changes to it, as it now hot reloads.

## Production Build

```bash
npx eas build --profile production --platform android
```

This generates a production APK, which you can install on your device (remember, you only have a limited number of production builds per month with Expo, assuming you’re on the free plan, so be careful with usage).

## Google / Android SHA1 Notes

To get your SHA1 key, you can find it here (password: android):

```bash
keytool -keystore ./android/app/debug.keystore -list -v
```

Your EAS fingerprints can be found here:

```bash
eas credentials
```

## Important:

Each build type creates its own SHA1. You may need multiple Android OAuth 2.0 clients:

 - Debug SHA1 + package
 - Dev Client SHA1 + package
 - EAS Dev SHA1 + package
 - EAS Prod SHA1 + package

Note: "DEVELOPER_ERROR" almost always means an incorrect SHA1 or package name in Google Cloud.

## Rebuild Workflow

Whenever you add a new native dependency (or change app.json / app.config.js), you need to run the below, before running EAS build, otherwise changes might not propagate:

```bash
npx expo prebuild --clean
```

## Daily Development Workflow (Hot Reload / Dev-Client)

After the first dev-client install, you can mostly stick to the below, for rapid iteration, which avoids unnecessary rebuilds.

```bash
npx expo start --dev-client
```

## Common Pitfalls & Tips

### 1. TypeScript Aliases

Use tsconfig.json paths like @/src/... and mirror them in metro.config.js.

### 2. Asset Management

Place all images/icons inside src/assets/.

### 3. App Name

Set it in app.json. Spaces are allowed.

### 4. APK Installation Errors

If you see:

```bash
INSTALL_FAILED_UPDATE_INCOMPATIBLE
```

Uninstall the existing app.

### 5. Over-the-Air Updates

Use:

```bash
expo-updates
eas update
```

### 6. Windows Path Length

Remember to keep paths short to avoid Gradle issues.

## Suggested Folder Structure

```bash
/assets
/src
|___  /components
|___  /constants
|___  /hooks
|___  /navigation
|___  /screens
|___  /utils
|___  /store
App.tsx
```

## Outcome

  - Fully TypeScript-configured React Native project
  - Full native module support
  - Predictable EAS builds
  - Google Sign-In compatibility
  - Clean, stable foundation for future apps
  - Fast iteration using Dev Client