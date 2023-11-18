import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4MQFYg6eXgKaJaKzRLPm4h4QbUNypapM",
    authDomain: "bistro-boss-restaurant-23148.firebaseapp.com",
    projectId: "bistro-boss-restaurant-23148",
    storageBucket: "bistro-boss-restaurant-23148.appspot.com",
    messagingSenderId: "136283881356",
    appId: "1:136283881356:web:ea61c94b3dab4e13c4a0a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);