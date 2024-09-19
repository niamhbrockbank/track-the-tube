import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Leaderboard(): JSX.Element {
    return (
        <>
        <NavBar />
        <Alert className="m-3.5 max-w-screen-sm">
  <AlertTitle>Coming Soon</AlertTitle>
  <AlertDescription>
    See how you compare to your friends.
  </AlertDescription>
</Alert>
        </>
    )
}