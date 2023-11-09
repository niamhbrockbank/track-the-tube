import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Track the tube Login",
  description: "Log in to Track the Tube.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        <Link href="/stations">Log In</Link>
      </Button>
    </main>
  );
}
