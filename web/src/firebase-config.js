/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAXWV-e0iCgMJ_3dcCgO_KyZjCp_-57cfs",
    authDomain: "friendlychat-bf3e8.firebaseapp.com",
    projectId: "friendlychat-bf3e8",
    storageBucket: "friendlychat-bf3e8.appspot.com",
    messagingSenderId: "527520812926",
    appId: "1:527520812926:web:3a229cec32a937fc6c6d2f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}