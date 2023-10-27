"use client";

import "firebaseui/dist/firebaseui.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthenticationPage from "@/components/authentication-page";
import Stations from "./stations/page";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChUjIchFLMJrNCteRhcJKdD83AJL44rgc",
  authDomain: "track-the-tube.firebaseapp.com",
  projectId: "track-the-tube",
  storageBucket: "track-the-tube.appspot.com",
  messagingSenderId: "530623776222",
  appId: "1:530623776222:web:d39255175adfb0eed2894f",
  measurementId: "G-GLCFS3DQ7R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <>{user ? <Stations user={user} /> : <AuthenticationPage auth={auth} />}</>
  );
}
