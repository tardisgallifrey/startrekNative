# An Android Start Trek Alliance Helper App

<p>I was gifted a copy of Fantasy Flight's Star Trek Alliance board game.  Though I enjoy the game, doing all the tasks 
can become a chore.  As I need to learn more coding, I started working on a Java app helper.  It is on my github as well.</
<p>For now, it is just a text outline that will soon be complete enough to use to play the game.  As time goes on, I will automate things such as dice throws and damage accounting.</p>
<p>This is a work in progress and you must use it at your own risk.  The APK is included at various update stages.  APK apps can damage phones if you aren't careful, so use at your own risk.  However, this app is running on my Motorola without problem.</p>

## Update 04/25/2022

<p>Arbitrarily enforced some structure on the app source.  Probably in future, I'll use an index.js that calls App.js from /src, but for now, I'll stick with this form.

<p>This app will be a carbon copy of the game rules, just organized where you can get around.  Will probably add some dice throw components, but may not take this version much further.  When this is app is done, then I'll do it more like the Java version I started, fully automated.

## Update 06/12/2022
<p>Had to restart my development and realized I had never written down the order of march.  Here it is.</p>

<p>These are the technologies needed.  Android SDK is not needed.</p>

<code>React Native</code><br>
<code>Expo development</code><br>
<code>EAS build</code><br>
<ol>
<li>You MUST have your Nodejs version at an LTS, currently 16.15.1. Get the Expo Android app (Sorry, I don't do IOS).</li>
<li>Install expo-cli -- <code>npm install -g exp-cli</code></li>
<li>Create Expo account at https://expo.dev</li>
<li>Use <code>expo login</code> with account credentials</li>
<li>Build initial project -- <code>expo init my-app-folder</code></li>
<li>CD into project folder and run -- <code>expo start</code></li>
<li>Ignore everything on terminal except where Developer tools will run. Likely at http://localhost:19002, but might be different.</li>
<li>Open web page at location identified above.</li>
<li>Ignore QR code.  Click on TUNNEL where it has CONNECTION.</li>
<li>QR code will now change.  Read QR code and your Android app will download to your phone on the Expo App. This is your development process.  It works.</li>

</ol>

EAS will build the APK of your Android project.<br>
<li>Install eas-cli -- <code>npm install -g eas-cli</code></li>
<li>Ensure you are logged in with <code>eas whoami</code> - Log in using Expo credentials, if you aren't. Run all following commands from inside your app folder.</li>
<li>Run -- <code>eas build:configure</code> and choose Android in the list of options presented.  An EAS.json file will be built in your app.</li>
<li>Replace the <code>eas.json</code> contents with the example found at -- https://docs.expo.dev/build-reference/apk/.</li>
<li>To save confusion before building, ensure you have GIT committed all changes before running build process.</li>
<li>Run build command exactly -- <code>eas build -p android --profile preview</code></li>
<li>Follow instructions during build process and you should have an APK file ready to download to your android.</li>
<li>An easy way to get the APK on your phone is to use Google Drive, or a similar cloud drive. Upload the APK to your Google Drive.  Open Google Drive on your android device and download the APK.  Your phone will complain, but tell it to install it anyway.</li>
</ol>