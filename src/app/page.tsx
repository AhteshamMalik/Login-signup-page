import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="main h-screen w-full flex items-center justify-center space-x-10 ">
        <Link href={"./login"}>
          <button className="h-24 w-72 text-2xl text-orange-500 bg-gradient-left rounded-md hover:scale-95">
            Login
          </button>
        </Link>
        <Link href={"./signup"}>
          <button className="h-24 w-72 text-2xl text-orange-500 bg-gradient-right rounded-md hover:scale-95">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
