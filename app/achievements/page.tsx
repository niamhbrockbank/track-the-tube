"use client"

import NavBar from "@/components/nav-bar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Achievements(): JSX.Element {
    return (
        <>
            <NavBar />
            <Alert className="m-3.5 max-w-screen-sm">
  <AlertTitle>Coming Soon</AlertTitle>
  <AlertDescription>
    Earn achievements for visiting stations.
  </AlertDescription>
</Alert>
        </>
    )
}