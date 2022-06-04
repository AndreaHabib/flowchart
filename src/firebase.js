import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
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

export async function getClassesTaken(uid) {
  const userDoc = doc(db, "users", uid);
  const user = await getDoc(userDoc);
  return user.data()["isClassesTaken"];
}

export const onAddClass = async (length, classesTaken, uid, el1) => {
  const classToBeTaken = length / 2 + 1;
  const userDoc = doc(db, "users", uid);
  await updateDoc(userDoc, {
    classesTaken: arrayUnion(el1[classToBeTaken]),
  });
};

export async function getUserInfo(uid) {
  const userDoc = doc(db, "users", uid);
  const user = await getDoc(userDoc);
  return user.data()["classesTaken"].concat(user.data()["connections"]);
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((user) => user)
    .catch((error) => {
      throw error;
    });
}

export async function register(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then(async (user) => {
      const usersRef = collection(db, "users");
      await setDoc(doc(usersRef, user.user.uid), {
        classesTaken: [],
        connections: [],
        isClassesTaken: {
          "CSC 126": false,
          "CSC 211": false,
          "CSC 220": false,
          "CSC 228": false,
          "CSC 305": false,
          "CSC 315": false,
          "CSC 326": false,
          "CSC 330": false,
          "CSC 332": false,
          "CSC 346": false,
          "CSC 347": false,
          "CSC 382": false,
          "CSC 430": false,
          "CSC 446": false,
          "CSC 490": false,
        },
      });
      return user;
    })
    .catch((error) => {
      throw error;
    });
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider)
    .then(async (result) => {
      const usersRef = collection(db, "users");
      await setDoc(doc(usersRef, result.user.uid), {
        classesTaken: [],
        connections: [],
        isClassesTaken: {
          "CSC 126": false,
          "CSC 211": false,
          "CSC 220": false,
          "CSC 228": false,
          "CSC 305": false,
          "CSC 315": false,
          "CSC 326": false,
          "CSC 330": false,
          "CSC 332": false,
          "CSC 346": false,
          "CSC 347": false,
          "CSC 382": false,
          "CSC 430": false,
          "CSC 446": false,
          "CSC 490": false,
        },
      });
      return result;
    })
    .catch((error) => {
      throw error;
    });
}

export async function loginWithGitHub() {
  const provider = new GithubAuthProvider();
  return await signInWithPopup(auth, provider)
    .then(async (result) => {
      const usersRef = collection(db, "users");
      await setDoc(doc(usersRef, result.user.uid), {
        classesTaken: [],
        connections: [],
        isClassesTaken: {
          "CSC 126": false,
          "CSC 211": false,
          "CSC 220": false,
          "CSC 228": false,
          "CSC 305": false,
          "CSC 315": false,
          "CSC 326": false,
          "CSC 330": false,
          "CSC 332": false,
          "CSC 346": false,
          "CSC 347": false,
          "CSC 382": false,
          "CSC 430": false,
          "CSC 446": false,
          "CSC 490": false,
        },
      });
      return result;
    })
    .catch((error) => {
      throw error;
    });
}

export async function signOut() {
  await auth.signOut();
}