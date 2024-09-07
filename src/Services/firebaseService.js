import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8GmS2mRH8JChbIe4U7bp1NQmpwR_c7L4",
  authDomain: "credledger.firebaseapp.com",
  projectId: "credledger",
  storageBucket: "credledger.appspot.com",
  messagingSenderId: "890422675641",
  appId: "1:890422675641:web:14960f336ceb2137e63368",
  measurementId: "G-GCQ2F41758"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};
