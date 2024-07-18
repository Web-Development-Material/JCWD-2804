"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";
import { supabase } from "@/utils/supabaseCredentials";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data }: any = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (data) {
        Cookie.set("token", data.session.access_token, {
          expires: data.session?.expires_in,
        });
        router.push("/");
      }
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { data } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
      console.log(data);
      if (data) {
        alert("Successfully login");
        router.push("/home");
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-black border border-gray-300 px-4 py-2 mt-4 flex items-center justify-center rounded"
        >
          <img
            src="/path/to/google-icon.png"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
