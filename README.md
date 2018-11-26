# Environment used

- Node v11.0.0
- React Native CLI v2.0.1
- React Navigation v3.0.0
- react-native-gesture-handler v1.0.9
- Mac OsX Mojave
- XCode v9.4.1
- iOS Simulator - iPhone X v11.4

# Steps followed

- Clone / Download this repo
- Run `npm install`
- Run `react-native run-ios`

# How did I solve the issue?

I installed `react-navigation` and `react-native-gesture-handler` packages at one shot (`npm install react-navigation react-native-gesture-handler --save`), even though the document shows it as a two step. And then I ran `react-native link`. Look like this caused the problem, however I don't have a clue on why this happens.

So follow the below steps to make it work:

- Run `npm install react-navigation --save`
- Run `npm install react-native-gesture-handler --save`
- Run `react-native link`
- Then run `react-native run-ios`
