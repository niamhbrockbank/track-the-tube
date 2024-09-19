import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Settings(): JSX.Element {
  return (
    <>
      <NavBar />
      <Alert className="m-3.5 max-w-screen-sm">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Coming Soon</AlertTitle>
        <AlertDescription>Change your account settings.</AlertDescription>
      </Alert>
    </>
  );
}
