// Import dotenv
const {
  REACT_APP_FIREBASE,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROKJECT_ID,
  REACT_APP_STORAGE,
  REACT_APP_MSG_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID
} = process.env;

// Config firebase
const config = {
  apiKey: REACT_APP_FIREBASE,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROKJECT_ID,
  storageBucket: REACT_APP_STORAGE,
  messagingSenderId: REACT_APP_MSG_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};

export const firebaseConfig = config;
