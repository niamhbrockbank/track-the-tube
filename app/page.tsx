"use client";

import { Button } from "@/components/ui/button";
import "firebaseui/dist/firebaseui.css";
import Link from "next/link";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/navigation";

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
const provider = new GoogleAuthProvider();

export default function Home() {
  const [user] = useAuthState(auth);

  const handleSignInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {user ? (
        <>{redirect("/stations")}</>
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Button onClick={handleSignInWithGoogle}>Sign in with Google</Button>
          <Link
            href="/stations"
            className="underline underline-offset-4 hover:text-primary"
          >
            Continue as Guest
          </Link>
        </main>
      )}
    </>
  );
}
