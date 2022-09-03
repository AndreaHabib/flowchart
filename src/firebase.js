import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
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
import { onAdd } from "./methods/onAdd";
import { onDelete } from "./methods/onDelete";

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

const isClassesTaken = {
  "CSC 126": {
    isTaken: false,
    canBeTaken: true,
    canBeUntaken: false,
  },
  "MTH 123": {
    isTaken: false,
    canBeTaken: true,
    canBeUntaken: false,
  },
  "MTH 230 & 229": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "MTH 231 & 229": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "MTH 232": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "200 level elective*": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 211": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 220": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 228": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 315": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 326": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 330": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 332 & 305": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 346 & 347": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 382": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "400 level elective*": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 430": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 446": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
  "CSC 490": {
    isTaken: false,
    canBeTaken: false,
    canBeUntaken: false,
  },
};

export async function getClassesTaken(uid) {
  const userDoc = doc(db, "users", uid);
  const user = await getDoc(userDoc);
  return user.data()["isClassesTaken"];
}

export const onDeleteClass = async (className, uid, isClassesTaken) => {
  const userDoc = doc(db, "users", uid);
  isClassesTaken[className].isTaken = false;
  isClassesTaken[className].canBeTaken = true;
  isClassesTaken[className].canBeUntaken = false;
  onDelete(isClassesTaken, className);
  await updateDoc(userDoc, {
    isClassesTaken: isClassesTaken,
  });
  window.location.reload();
};

export const onAddClass = async (className, uid, isClassesTaken) => {
  const userDoc = doc(db, "users", uid);
  isClassesTaken[className].isTaken = true;
  isClassesTaken[className].canBeTaken = false;
  isClassesTaken[className].canBeUntaken = true;
  onAdd(isClassesTaken, className);
  await updateDoc(userDoc, {
    isClassesTaken: isClassesTaken,
  });
  window.location.reload();
};

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
        isClassesTaken: isClassesTaken,
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
    .then(async (user) => {
      const usersRef = collection(db, "users");
      const docRef = await getDoc(doc(usersRef, user.user.uid));
      if (!docRef.exists()) {
        await setDoc(doc(usersRef, user.user.uid), {
          isClassesTaken: isClassesTaken,
        });
      }
      return user;
    })
    .catch((error) => {
      throw error;
    });
}

export async function loginWithGitHub() {
  const provider = new GithubAuthProvider();
  return await signInWithPopup(auth, provider)
    .then(async (user) => {
      const usersRef = collection(db, "users");
      const docRef = await getDoc(doc(usersRef, user.user.uid));
      if (!docRef.exists()) {
        await setDoc(
          doc(usersRef, user.user.uid),
          {
            isClassesTaken: isClassesTaken,
          },
          { merge: true }
        );
      }
      return user;
    })
    .catch((error) => {
      throw error;
    });
}

export async function signOut() {
  await auth.signOut();
}
