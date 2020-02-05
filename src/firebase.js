import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyBF0JGlYqFAmRQyegd8CsSpWJh6_NW_27Q",
  authDomain: "dance-congresses.firebaseapp.com",
  databaseURL: "https://dance-congresses.firebaseio.com",
  projectId: "dance-congresses",
  storageBucket: "dance-congresses.appspot.com",
  messagingSenderId: "169224107458",
  appId: "1:169224107458:web:e51aefa19add5970d4d25b",
  measurementId: "G-CQRDCXSHWR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase