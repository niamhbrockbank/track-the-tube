import Link from "next/link";

export default function NavBar() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <nav className={"flex items-center space-x-4 lg:space-x-6 mx-6"}>
            <Link
              href="/stations"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Overview
            </Link>
            <Link
              href="/stations"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Leaderboard
            </Link>
            <Link
              href="/stations"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Achievements
            </Link>
            <Link
              href="/stations"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
