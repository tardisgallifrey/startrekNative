# An Android Start Trek Alliance Helper App

<p>I was gifted a copy of Fantasy Flight's Star Trek Alliance board game.  Though I enjoy the game, doing all the tasks 
can become a chore.  As I need to learn more coding, I started working on a Java app helper.  It is on my github as well.</
<p>For now, it is just a text outline that will soon be complete enough to use to play the game.  As time goes on, I will automate things such as dice throws and damage accounting.</p>
<p>This is a work in progress and you must use it at your own risk.  The APK is included at various update stages.  APK apps can damage phones if you aren't careful, so use at your own risk.  However, this app is running on my Motorola without problem.</p>

## Update 04/25/2022

<p>Arbitrarily enforced some structure on the app source.  Probably in future, I'll use an index.js that calls App.js from /src, but for now, I'll stick with this form.

<p>This app will be a carbon copy of the game rules, just organized where you can get around.  Will probably add some dice throw components, but may not take this version much further.  When this is app is done, then I'll do it more like the Java version I started, fully automated.

<code>Android SDK</code>
<code>React Native</code>
<code>Expo development</code>

Step 0: You MUST have your Nodejs version at an LTS, currently 16.15.1. Get the Expo Android app (Sorry, I don't do IOS).
Step 1: Install expo-cli -- <code>npm install -g exp-cli</code>
Step 3: Create Expo account at https://expo.dev
Step 4: use <code>expo login<code> with account credentials
Step 5: Build initial project -- <code>expo init my-app-folder</code>
Step 6: CD into project folder and run -- <code>expo start<code>
Step 7: Ignore everything on terminal except where Developer tools will run. Likely at http://localhost:19002, but might be different.
Step 8: Open web page at location identified above.
Step 9: Ignore QR code.  Click on TUNNEL where it has CONNECTION.
Step 10: QR code will now change.  Read QR code and your Android app will download to your phone on the Expo App. This is your development process.  It works.

<code>EAS build</code>

EAS will build the APK of your Android project.
Step 0: Install eas-cli -- <code>npm install -g eas-cli</code>
Step 1: Ensure you are logged in with <code>eas whoami</code> - Log in using Expo credentials, if you aren't. Run all following commands from inside your app folder.
Step 2: Run -- <code>eas build:configure</code> and choose Android in the list of options presented.  An EAS.json file will be built in your app.
Step 3: Replace the <code>eas.json</code> file with the example found at -- https://docs.expo.dev/build-reference/apk/.
Step 4: To save confusion before building, ensure you have GIT committed all changes before running build process.
Step 5: Run build command exactly -- <code>eas build -p android --profile preview</code>
Step 6: Follow instructions during build process and you should have an APK file ready to download to your android.
Step 7: An easy way to get the APK on your phone is to use Google Drive, or a similar cloud drive. Upload the APK to your Google Drive.  Open Google Drive on your android device and download the APK.  Your phone will complain, but tell it to install it anyway.