import * as firebase from 'firebase';

// Initialize Firebase
  const prodConfig = {
    apiKey: "AIzaSyAzFE2PUqupVMsH_TIMqQoHTq0IjOVS3Xg",
    authDomain: "hrmanager-8f146.firebaseapp.com",
    databaseURL: "https://hrmanager-8f146.firebaseio.com",
    projectId: "hrmanager-8f146",
    storageBucket: "hrmanager-8f146.appspot.com",
    messagingSenderId: "752182474971"
  };

  const devConfig = {
    apiKey: "AIzaSyAzFE2PUqupVMsH_TIMqQoHTq0IjOVS3Xg",
    authDomain: "hrmanager-8f146.firebaseapp.com",
    databaseURL: "https://hrmanager-8f146.firebaseio.com",
    projectId: "hrmanager-8f146",
    storageBucket: "hrmanager-8f146.appspot.com",
    messagingSenderId: "752182474971"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;


  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();
  const db = firebase.database();

  export {
    auth,
    db
  };
