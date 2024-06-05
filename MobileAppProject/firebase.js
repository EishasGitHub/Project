import {initializeApp} from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCK16xKZo9cg5osxmxLyK9cWqZbTQLfkpg",
  authDomain: "project-2fe0b.firebaseapp.com",
  databaseURL: "https://project-2fe0b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-2fe0b",
  storageBucket: "project-2fe0b.appspot.com",
  messagingSenderId: "670162360985",
  appId: "1:670162360985:web:ed3bf424ccef2e3ec9f608"
};

const firebaseApp = initializeApp(firebaseConfig);

initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const auth = getAuth(firebaseApp);
const db = initializeFirestore(firebaseApp, { experimentalForceLongPolling: true });

export {firebaseApp, auth, db};

