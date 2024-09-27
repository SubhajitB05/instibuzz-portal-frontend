import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <h1 className="text-8xl">HOME PAGE</h1>
      <div className="flex justify-between items-center mt-3">
        <p>New User? <Link href={'/signup'} className="text-pink-500">Signup</Link></p>
        <p>Already registered? <Link href={'/login'} className="text-pink-500">Login</Link></p>
      </div>
    </div>
  );
}
