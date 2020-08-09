// Import firebase
import firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';

// Import services
import 'firebase/auth';
import 'firebase/firestore';

// Firebase init app
firebase.initializeApp(firebaseConfig);

// Export services
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();