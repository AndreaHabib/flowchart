import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore/lite";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);

const getUsersDoc = () => {
  const usersCol = collection(db, "users");
  const userDoc = doc(usersCol, auth.currentUser.uid);
  return userDoc;
};

export async function getUserInfo() {
  const userDoc = getUsersDoc(auth.currentUser.uid);
  const user = await getDoc(userDoc);
  return user.data();
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((user) => user)
    .catch((error) => {
      throw error;
    });
}

export async function register(email, password) {
  const classesTaken = [];
  return createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      setDoc(doc(db, "users", user.user.uid), classesTaken);
      return user;
    })
    .catch((error) => {
      throw error;
    });
}

export async function loginWithGoogle() {
  const classesTaken = [];
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      setDoc(doc(db, "users", result.user.uid), classesTaken);
    })
    .catch((error) => {
      throw error;
    });
}

export async function loginWithGitHub() {
  const classesTaken = [];
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      setDoc(doc(db, "users", result.user.uid), classesTaken);
    })
    .catch((error) => {
      throw error;
    });
}

export async function signOut() {
  await auth.signOut();
}
