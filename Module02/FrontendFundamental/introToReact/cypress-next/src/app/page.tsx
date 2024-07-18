"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

import Navbar from "@/components/Navbar";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookie.get("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-full fixed top-0">
        <Navbar />
      </div>
      <div>Home Page</div>
    </main>
  );
};

export default Home;
