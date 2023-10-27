import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

interface Props {
  auth: Auth;
}

export default function UserAuthForm({ auth }: Props) {
  const provider = new GoogleAuthProvider();
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
      <Input placeholder="name@example.com" />
      <Button disabled>Coming Soon</Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button onClick={handleSignInWithGoogle}>Sign in with Google</Button>
      <Link
        href="/stations"
        className="px-8 text-center text-sm text-muted-foreground underline underline-offset-4 hover:text-primary"
      >
        Continue as Guest
      </Link>
    </>
  );
}
