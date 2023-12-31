# `seguro-platform` CHANGELOG

## `0.59.0`

### Additions

- CoNET-SI 

### Changes

- None.

### Fixes

- bug fixed.

---


## `0.58.1`

### Additions

- None.

### Changes

- None.

### Fixes

- bug fixed.

---

## `0.58.0`

### Additions

- buyUSDC, getUSDCPrice, sendAsset, getFaucet

### Changes

- None.

### Fixes

- None.

---


## `0.56.0`

### Additions

- Support CoNET testnet

### Changes

- None.

### Fixes

- None.

---

## `0.55.6`

### Additions

- CoNET Platfrom menu.

### Changes

- Main menu & Global Bar.

### Fixes

- React issue at Drawer & Overlay.

---

## `0.55.5`

### Additions

- None.

### Changes

- Upgrade all included package to current version.

### Fixes

- None.

---

## `0.55.4`

### Additions

- None.

### Changes

- None.

### Fixes

- Fixed react build bug.

---

## `0.55.3`

### Additions

- None.

### Changes

- Upgrade included package.

### Fixes

- None.

---


## `0.55.2`

### Additions

- None.

### Changes

- Use publish package
- @conet.project/seguro-gateway
- @conet.project/seguro-worker-lib

### Fixes

- Minor style fixes throughout.

---


## `0.55.0`

### Additions

- Add initial messenger chat UI.
- Prepare for code transition to Peter.

### Changes

- None.

### Fixes

- Minor style fixes throughout.

---

## `0.54.0`

### Additions

- Add `Settings` page into Messenger.
- Add `Chat History` page into Messenger Settings.
- Add `Wallpaper` page into Messenger Settings.
- Add `Status` page into Messenger Settings.
- Add `Font Size` page into Messenger Settings.
- Add `Disappearing Messages` page into Messenger Settings.
- Add `Sounds` page into Messenger Settings.

### Changes

- None.

### Fixes

- Minor style fixes throughout.

---

## `0.53.0`

### Additions

- Add `Add Chat` functionality.
- Add `ContactList` component.
- Add `categorizedContact` hook.

### Changes

- Refactored Contact list into separate component.

### Fixes

- Minor style fixes throughout.

---

## `0.52.0`

### Additions

- Add example contacts and list items for contacts.
- Add states for contacts, set, update, new, select.
- Add right panel information for contacts when selected.
- Add update nickname functionality.

### Changes

- Removed legacy code.
- Remove unused or components that were used once.

### Fixes

- Minor style fixes throughout.

---

## `0.51.0`

### Additions

- Add VerticalTabNavigator for messenger.
- Create separate components for panel content.
- Add header bars for each left panel content.
- Add new icons for header bars.

### Changes

- Removed legacy code.
- Remove unused or components that were used once.

### Fixes

- None.

---

## `0.50.0`

### Additions

- None.

### Changes

- Put previous passcode input back for non-touch devices.

### Fixes

- Maximize electron app on click when minimized.
- Style issues (Still need to address completely).

---

## `0.49.1`

### Additions

- None.

### Changes

- Put previous passcode input back for non-touch devices.

### Fixes

- None.

---

## `0.49.0`

### Additions

- Verification integration.
- Add generic verification error and localization.
- Add delete passcode container button on `unlockScreen`.
- Add additional localization across application.

### Changes

- Onboarding view switch statement.
- Minor adjustments to styles and flow of onboarding/unlocking.

### Fixes

- Fix issue with having container but not verified, changed flow accordingly.

---

## `0.47.0`

### Additions

- None.

### Changes

- Remove electron build processes.
    - Remove `electron-builder`.
    - Remove `electron notarize`.
- Future builds will be in release repository `seguro-platform-release`.

### Fixes

- None.

---

## `0.46.0`

### Additions

- None.

### Changes

- None.

### Fixes

- Fix CSS issues.
- Fix global bar active profile update when profile has been editted.

---

## `0.45.1`

### Additions

- Network status test

### Changes

- None.

### Fixes

- Fix CSS issues.

---

## `0.45.0`

### Additions

- Network status.
- Network dropdown.
- Network localization types.

### Changes

- None.

### Fixes

- Fix CSS issues.

---

## `0.44.0`

### Additions

- Integration of profile functionality.
    - Adding a new profile
    - Updating a profile
- Beginning network UI.

### Changes

- None.

### Fixes

- Fix CSS issues.

---

## `0.43.0`

### Additions

- None.

### Changes

- Bump package versions.

### Fixes

- Fix CSS issues.

---

## `0.42.0`

### Additions

- Continuing integration with `worker-lib` and `gateway`.
- Preferences and profiles fix from `worker-lib` and `seguro-gateway`.
- Add launch screen.
- Add preferences saving.

### Changes

- Multiple types, states and css changes.

### Fixes

- Fix CSS issues.

---

## `0.41.0`

### Additions

- Continuing integration with `worker-lib` and `gateway`
- Add profile setup and preferences storing (need to fix).
- Identified a few problems with the `worker-lib` and will wait for fix.

### Changes

- None.

### Fixes

- Fix CSS issues.

---

## `0.40.0`

### Additions

- Onboarding flow overhaul to match platform styles.
- Continuing integration with `worker-lib` and `gateway`

### Changes

- None.

### Fixes

- Fix CSS issues.

---

## `0.39.0`

### Additions

- Onboarding flow overhaul to match platform styles.
- Add new setting up page for onboarding.
- Worker bridge integration and password generation.
- Multiple styles for existing and new components.

### Changes

- None.

### Fixes

- Fix CSS issues.

---

## `0.38.0`

### Additions

- Notification icon in global bar.
- Notification red indicator when new notifications are present.
- Notification dropdown when clicked in global bar.
- Notification items in dropdown.
- Change notification close icon.
- Add example notifications with click actions.

### Changes

- None.

### Fixes

- Fix CSS issues.

---

## `0.37.1`

### Additions

- None.

### Changes

- None.

### Fixes

- Fix CSS issues.
- Minor fix for profile icon in global bar.

---

## `0.37.0`

### Additions

- None.

### Changes

- Refactor theme styles for future scalability.
- Fix multiple style issues.
- Create elevation based background colors for better contrast.
- Delete unnecessary styles.

### Fixes

- Fix CSS issues.

---

## `0.36.0`

### Additions

- None.

### Changes

- Change primary profile checkbox to custom checkbox.
- Clicking outside of overlay will close all modals.

### Fixes

- Fix CSS issues.

---

## `0.35.0`

### Additions

- None.

### Changes

- Passcode and language item now use full length item click.
- Language changes will switch users back to settings page.
- Passcode change will show a toast.
- Primary profile deletion will set next client profile as primary.
- Users cannot delete last profile, they must have at least 2 profiles to delete one.
- Clicking outside of dropdown will close dropdown.

### Fixes

- Fix CSS issues.

---

## `0.34.0`

### Additions

- Add network states (Need to add other network icons).

### Changes

- Minor CSS fix in delete device page.

### Fixes

- Fix CSS issues.

---

## `0.33.1` `0.33.2`

### Additions

- None.

### Changes

- Small style change.

### Fixes

- Fix CSS issues.

---

## `0.33.0`

### Additions

- Hook onboarding and main screen pages.
- Add isUnlocked state to be used with hasContainer to show main screen.

### Changes

- Clean onboarding styles.

### Fixes

- Fix CSS issues.

---

## `0.32.1`

### Additions

- None

### Changes

- Remove unused code.

### Fixes

- Fix CSS issues.

---

## `0.32.0`

### Additions

- Add deleting device functionality.
- Add localization for deleting device.

### Changes

- Modify list item text size for platform settings.

### Fixes

- Fix CSS issues.

---

## `0.31.0`

### Additions

- Add page transition to passcode page.

### Changes

- Button to confirm after editing device name.

### Fixes

- Fix CSS issues.

---

## `0.30.2`

### Additions

- None.

### Changes

- Bump versions for dependencies.

### Fixes

- Fix CSS issues.

---

## `0.30.0`

### Additions

- Add device name change inside of platform settings.

### Changes

- None.

### Fixes

- Fix CSS issues.

---

## `0.29.0`

### Additions

- Add passcode editting page on settings.
    - Passcode edit title.
    - Passcode edit input.
    - Passcode edit keypad.
    - Passcode and confirmation states.
    - Passcode edit back and next buttons.
- Add localization for passcode edit text.

### Changes

- Localization for managing, deleting, adding profile(s).

### Fixes

- Fix CSS issues.

---

## `0.28.0`

### Additions

- Add states for devices.
- Add new localization text for managing, deleting, adding profile(s).

### Changes

- Localization for managing, deleting, adding profile(s).

### Fixes

- Fix CSS issues.

---

## `0.27.0`

### Additions

- Add states for creating a new profile.
- Add modal for creating a new profile.
- Add pop up toast for when new profile is created.

### Changes

- None.

### Fixes

- Fix CSS issues.

---

## `0.26.0`

### Additions

- None

### Changes

- Bump package dependency versions.

### Fixes

- None

---

## `0.25.0`

### Additions

- Add delete profile.
- Add delete profile state and actions.

### Changes

- Minor style CSS changes.
- Update profile view into separate file.

### Fixes

- Fix multiple CSS issues.
- Fix minor state issues.

---

## `0.24.0`

### Additions

- Add functionality to modal for managing profiles.
- Add switching of profiles from dropdown.
- Add changing names, profile picture and saving into state.
- Add states for available profiles, active profiles.

### Changes

- Minor style CSS changes.

### Fixes

- Fix multiple CSS issues.

---

## `0.23.0`

### Additions

- Add functionality to modal for managing profiles.
- Add modal page navigator.
- Add manage single profile page.
- Add profile image change functionality. (Prototype currently)

### Changes

- Minor style CSS changes.

### Fixes

- None

---

## `0.22.0`

### Additions

- Add manage profile modal. (Work to be done.)
- Add manage profile and add profile button in profile dropdown.
- Moved profile data into profile dropdown.
- Added modal for managing profiles.

### Changes

- Multiple style CSS changes.
- Multiple TippyJS style changes.
- Removed profile section in platform settings.

### Fixes

- Multiple dropdown issues fixed.

---

## `0.21.0`

### Additions

- Standardize font sizes using styled component themes.
- Change border colors.
- Update existing font sizes to use theme font sizes.
- Update profile dropdown.
- Add manage profile modal. (Work to be done.)

### Changes

- Multiple style CSS changes.

### Fixes

- None.

---

## `0.20.0`

### Additions

- Add Platform Settings Modal.
- Add more localization and fix existing localization UI.
- Add more sections into Platform Settings.
    - Devices
    - Device Codes
    - Subscription Plan
- Add toast for notifications

### Changes

- Multiple style CSS changes.

### Fixes

- None.

---

## `0.19.0`

### Additions

- Add Platform Settings Modal.
- Create modal component.
- Add more localization and fix existing localization UI.
- Add Platform Settings navigation with transitions.
- Add Language selection into Platform Settings.
- Add Theme selector into Platform Settings.

### Changes

- Multiple style CSS changes.

### Fixes

- None.

---

## `0.18.0`

### Additions

- Add `Messenger` application.
- Add 3 panel design layout.
- Add 3 panel focus states.
- Add `TabNavigator` for first panel on mobile.
- Add `pageNavigator` context for `TabNavigator` page changes.

### Changes

- Multiple style CSS changes.
- Update `Drawer.tsx` header height.

### Fixes

- None.

---

## `0.17.0`

### Additions

- Add `LeftPanel`, `RightPanel` and `MainPanel`.
- Add drawer navigation and opacity.
- Add global navigation component.
- Add global navigation icon dropdown.

### Changes

- Multiple style CSS changes.

### Fixes

- None.

---

## `0.16.0`

### Additions

- Add `GlobalBar` component.
- Add `Dropdown` component.
- Add `ProfileCard` component.

### Changes

- Modified Seguro logo file for logo with text and logo without text.

### Fixes

- Fixed multiple style issues.

---

## `0.15.0`

### Additions

- Hooked up `LaunchScreen.tsx`, `OnboardingScreen.tsx` and `UnlockScreen.tsx`.
- Add more localization text for modals.
- Add verification error handling (TO BE TESTED).
- Add app-wide Overlay and states to toggle overlay.
- Add modal component.

### Changes

- Bump `seguro-worker-lib` and `seguro-gateway`.
- Cleaned up some files.

### Fixes

- Fixed multiple style issues.

---

## `0.14.0`

### Additions

- Integration with `seguro-worker-lib`.
- Add new keypad design.
- Add design color palettes for dark and light mode.
- Add Seguro logo on language select and lottie animation on verification page.

### Changes

- Multiple CSS styles and responsiveness across devices.
- Page layouts for onboarding.

### Fixes

- None.

---

## `0.13.0`

### Additions

- Add `lottie` for animations on onboarding tutorial pages.
- Add `carousel` component.
- Add `progressBar` component.
- Add `progressDots` component.
- Add montserrat font.
- Add additional localization text to support tutorial pages.

### Changes

- None.

### Fixes

- None.

---

## `0.12.0`

### Additions

- Add desktop layouts.
- Add input for no touch devices.
- Add onboarding context for pages within the onboarding flow.

### Changes

- Changes to multiple layouts to fit Figma design.

### Fixes

- Fix font flicker issue by moving font loading to `font.css` file instead of `createGlobalStyle` from
  styled-components.

---

## `0.11.0`

### Additions

- Change `LanguageSelect` UI to match mockups.
- Passcode checking for onboarding screens.
- Display error messages when the passcode is invalid, incorrect or wrong.

### Changes

- None.

### Fixes

- None.

---

## `0.10.0`

### Additions

- Add `SelectLanguage`, `Passcode` pages to `OnboardingScreen.tsx`.
- Add `framer-motion` package for animating screens.

### Changes

- None.

### Fixes

- None.

---

## `0.9.0`

### Additions

- Add `LanguageSelect` component for onboarding screen.
- Add global styles from `styled-components`.
- Add `Lato` font for light, normal and bold.

### Changes

- None.

### Fixes

- None.

---

## `0.8.0`

### Additions

- Create `PasscodeInput` component for unlock and onboarding screens.
- Add keypad component, passcode input component into `unlockScreen.ts`.
- Add more UI localization text for `zh-CN` and `en-US`.
- Add localization languages for keypad component.
- Add more theme properties for individual UI components.
- Create `OnboardingScreen.tsx` for onboarding flow.

### Changes

- None.

### Fixes

- None.

---

## `0.7.0`

### Additions

- Add detection of touch devices.
- Add `detectWindowInnerSize` function in `utilities.ts` and tests in `utilities.test.ts`
- Add `detectTouchDevice` function in `utilities.ts` and tests in `utilities.test.ts`
- Add `windowInnerSize` state into `appStateReducer`.
- Add `isTouchDevice` state into `appStateReducer`.
- Add `windowInnerSize` and `isTouchDevice` action creators into `appStateActions.ts`.
- Add dispatch functions for `windowInnerSize` and `isTouchDevice` into `useAppState.ts`.
- Temporary display of `windowInnerSize` and `isTouchDevice` in `LaunchScreen.tsx`.

### Changes

- None.

### Fixes

- None.

---

## `0.6.0`

### Additions

- Add IconButton component.
- Add Storybook RootDecorator component that wraps the story in the app context providers.
- Add Storybook CanvasDecorator component with theme switcher.
- Add Testing Library module that re-exports a version of `render` wrapped in the app context providers.
- Add Jest mocks for `matchMedia` browser API.

### Changes

- Upgrade dependencies.

### Fixes

- None.

---

## `0.5.0`

### Additions

- Setup localization system with automatic preferred locale detection for supported languages / fallback to en-US
  locale.
- Add support for zh-CN locale.
- Add support for en-US locale.
- Add locale switch debug command.

### Changes

- Improve store reducer property types.

### Fixes

- None.

---

## `0.4.0`

### Additions

- Setup theming system with dark / light theme and automatic preferred theme detection.
- Add debug commands in development mode.

### Changes

- Dispatch non-component actions using action creator functions instead of manually constructing action objects.

### Fixes

- None.

---

## `0.3.0`

### Additions

- Setup bridge service.
- Display launch screen while app is initializing.
- Display unlock screen when app is initialized.
- Show "hello world" message from bridge service.

### Changes

- None.

### Fixes

- None.

---

## `0.2.0`

### Additions

- Add storybook, lint, and dependency upgrade instructions to the README.

### Changes

- Upgrade dependencies.

### Fixes

- None.

---

## `0.1.0`

### Additions

- Add initial project.

### Changes

- None.

### Fixes

- None.

---

## `major.minor.patch`

### Additions

- None.

### Changes

- None.

### Fixes

- None.
