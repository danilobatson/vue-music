import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnz8Kp5n7pUCDUm7B1o-xRk3IkLm4jk2k',
  authDomain: 'music-c3ca5.firebaseapp.com',
  projectId: 'music-c3ca5',
  storageBucket: 'music-c3ca5.appspot.com',
  appId: '1:271927813034:web:f0238295af5cae6e5601d3',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const usersCollections = db.collection('users');
const songsCollections = db.collection('songs');
const storage = firebase.storage();

export { auth, usersCollections, songsCollections, storage };
