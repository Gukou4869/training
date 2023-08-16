import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import router from "next/router";

import { getFirebaseApp } from "../init";

const auth = getAuth(getFirebaseApp());

export async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { error, result };
}

export async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
    router.push("/dashboard");
  } catch (e) {
    error = e;
  }

  return { error, result };
}

export async function logout() {
  const error = null;
  try {
    await signOut(auth);
    router.push("/");
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.log(e);
    }
  }

  return { error };
}
