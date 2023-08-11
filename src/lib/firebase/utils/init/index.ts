// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

import type { FirebaseApp} from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  appId: process.env.NEXT_PUBLIC_APPID,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
};

const app = initializeApp(firebaseConfig);
console.log("🚀 ~ file: index.ts:20 ~ app:", app);

export const getFirebaseApp = (): FirebaseApp => {
  return !getApps().length ? app : getApp();
};
