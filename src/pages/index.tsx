import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
function Home() {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}"
      }
    >
      <div>
        <nav>
          <ul className="flex gap-5 items-center justify-center my-4">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/super_admin/users">
              <li>Users</li>
            </Link>
            <Link href="/admin/dashboard">
              <li>Contact</li>
            </Link>
            <Link href="/auth/login">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Home;
