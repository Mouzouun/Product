import firebase from 'firebase'




// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAq7jfQlWJjfYgGiHURnnQrNS0ww90jZNo",
    authDomain: "product-manager-6cb8c.firebaseapp.com",
    databaseURL: "https://product-manager-6cb8c.firebaseio.com",
    projectId: "product-manager-6cb8c",
    storageBucket: "product-manager-6cb8c.appspot.com",
    messagingSenderId: "266451703617",
    appId: "1:266451703617:web:85fd1d43adde5199e9f3c0"
};
  // Initialize Firebase



  const store= firebase.initializeApp(firebaseConfig);
  const db=store.firestore()
  export{db}