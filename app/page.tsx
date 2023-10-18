import { Button } from "@/components/ui/button";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        <Link href="/stations">Sign in</Link>
      </Button>
      <Button>Sign in with Google</Button>
    </main>
  );
}
