import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseCredentials";
import Cookie from "js-cookie";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    supabase.auth.signOut();
    Cookie.remove("token");
    router.push("/login");
  };

  return (
    <nav className="w-full h-16 bg-cyan-900 text-white flex justify-between items-center px-4">
      <div className="text-lg font-bold">My App</div>
      <div className="space-x-10">
        <a
          className="p-3 rounded-md bg-cyan-900 hover:bg-cyan-700"
          href="/home"
        >
          Home
        </a>
        <a
          className="p-3 rounded-md bg-cyan-900 hover:bg-cyan-700"
          href="/about"
        >
          About
        </a>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
