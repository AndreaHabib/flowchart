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
  "CSC 305": {
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
  "CSC 332": {
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
  switch (className) {
    case "CSC 126":
      isClassesTaken["200 level elective*"].canBeTaken = false;
      isClassesTaken["CSC 211"].canBeTaken = false;
      isClassesTaken["CSC 220"].canBeTaken = false;
      break;
    case "200 level elective*":
      if (
        !isClassesTaken["CSC 211"].isTaken &&
        !isClassesTaken["200 level elective*"].isTaken
      ) {
        isClassesTaken["CSC 126"].canBeUntaken = true;
      }
      break;
    case "CSC 211":
      if (
        !isClassesTaken["CSC 220"].isTaken &&
        !isClassesTaken["200 level elective*"].isTaken
      ) {
        isClassesTaken["CSC 126"].canBeUntaken = true;
      }
      isClassesTaken["CSC 228"].canBeTaken = false;
      isClassesTaken["CSC 326"].canBeTaken = false;
      break;
    case "CSC 220":
      if (
        !isClassesTaken["CSC 211"].isTaken &&
        !isClassesTaken["200 level elective*"].isTaken
      ) {
        isClassesTaken["CSC 126"].canBeUntaken = true;
      }
      isClassesTaken["CSC 346 & 347"].canBeTaken = false;
      break;
    case "CSC 228":
    case "CSC 326":
      if (
        !isClassesTaken["CSC 326"].isTaken ||
        !isClassesTaken["CSC 228"].isTaken
      ) {
        isClassesTaken["CSC 382"].canBeTaken = false;
      }
      if (
        !isClassesTaken["CSC 228"].isTaken &&
        !isClassesTaken["CSC 326"].isTaken
      ) {
        isClassesTaken["CSC 211"].canBeUntaken = true;
      }
      if (className === "CSC 326") {
        isClassesTaken["400 level elective*"].canBeTaken = false;
        isClassesTaken["CSC 330"].canBeTaken = false;
        isClassesTaken["CSC 315"].canBeTaken = false;
      }
      break;
    case "CSC 382":
      isClassesTaken["CSC 228"].canBeUntaken = true;
      isClassesTaken["CSC 326"].canBeUntaken = true;
      break;
    case "CSC 346 & 347":
      isClassesTaken["CSC 220"].canBeUntaken = true;
      break;
    case "CSC 446":
      isClassesTaken["CSC 346 & 347"].canBeUntaken = true;
      break;
  }
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
  switch (className) {
    case "CSC 126":
      isClassesTaken["200 level elective*"].canBeTaken = true;
      isClassesTaken["CSC 211"].canBeTaken = true;
      isClassesTaken["CSC 220"].canBeTaken = true;
      break;
    case "200 level elective*":
      isClassesTaken["CSC 126"].canBeUntaken = false;
      break;
    case "CSC 211":
      isClassesTaken["CSC 126"].canBeUntaken = false;
      isClassesTaken["CSC 228"].canBeTaken = true;
      isClassesTaken["CSC 326"].canBeTaken = true;
      break;
    case "CSC 220":
      isClassesTaken["CSC 126"].canBeUntaken = false;
      isClassesTaken["CSC 346 & 347"].canBeTaken = true;
      break;
    case "CSC 228":
    case "CSC 326":
      isClassesTaken["CSC 211"].canBeUntaken = false;
      if (
        isClassesTaken["CSC 326"].isTaken &&
        isClassesTaken["CSC 228"].isTaken
      ) {
        isClassesTaken["CSC 382"].canBeTaken = true;
      }
      if (className === "CSC 326") {
        isClassesTaken["400 level elective*"].canBeTaken = true;
        isClassesTaken["CSC 330"].canBeTaken = true;
        isClassesTaken["CSC 315"].canBeTaken = true;
      }
      break;
    case "CSC 382":
      isClassesTaken["CSC 228"].canBeUntaken = false;
      isClassesTaken["CSC 326"].canBeUntaken = false;
      break;
    case "CSC 346 & 347":
      isClassesTaken["CSC 220"].canBeUntaken = false;
      isClassesTaken["CSC 446"].canBeTaken = true;
      break;
    case "CSC 446":
      isClassesTaken["CSC 346 & 347"].canBeUntaken = false;
      break;
  }

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
    .then(async (result) => {
      const usersRef = collection(db, "users");
      await setDoc(doc(usersRef, result.user.uid), {
        isClassesTaken: isClassesTaken,
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
        isClassesTaken: isClassesTaken,
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
