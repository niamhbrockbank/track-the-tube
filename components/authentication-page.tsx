import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { Auth } from "firebase/auth";
import { cn } from "@/lib/utils";
import { TrainFront } from "lucide-react";
import UserAuthForm from "./user-auth-form";

interface Props {
  auth: Auth;
}
export default function AuthenticationPage({ auth }: Props): JSX.Element {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-[url('/tube-unsplash.jpg')] bg-cover" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <TrainFront className="mr-2" />
            Track the Tube
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Track the Tube aims to transform the daily routine of
                taking the tube into an exciting adventure, making users
                appreciate the vast underground network and rediscover the joy
                of commuting.&rdquo;
              </p>
              <footer className="text-sm">Track the Tube</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm auth={auth} />
          </div>
        </div>
      </div>
    </>
  );
}
