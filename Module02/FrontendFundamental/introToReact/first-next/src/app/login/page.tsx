"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
import { showSuccessAlert, showErrorAlert } from "@/utils/swal";
import Cookie from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginMethod, setLoginMethod] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data }: any = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      const session = data?.session;
      if (session && session.access_token && session.expires_in) {
        showSuccessAlert("Successfully signed in", "Login successful", () => {
          Cookie.set("token", session.access_token, {
            expires: session.expires_in,
          });
          router.push("/cms-page");
        });
      } else {
        throw new Error("Session information is missing");
      }
    } catch (error) {
      showErrorAlert("Failed login", "Failed to sign in");
    }
  };

  const handleLoginWithGoogle = async () => {
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
      if (data) {
        showSuccessAlert(
          "Successfully signed in",
          "success signing in with google",
          () => {
            router.push("/cms-page");
          }
        );
      }
    } catch (error) {
      showErrorAlert("Error signing in", "error signing in with gooogle");
    }
  };

  const submitLoginMethod = async (e: FormEvent) => {
    e.preventDefault();
    if (loginMethod === "loginDefault") {
      handleLogin(e);
    } else if (loginMethod === "loginOAuth") {
      handleLoginWithGoogle();
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
        onSubmit={submitLoginMethod}
        className="w-full max-w-sm p-4 bg-white rounded-md shadow-md"
      >
        <h2 className="mb-6 text-2xl font-semibold text-center text-black">
          Login
        </h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
        />
        <button
          type="submit"
          name="loginMethod"
          value={loginMethod}
          onClick={() => setLoginMethod("loginDefault")}
          className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
        >
          Login
        </button>
        <button
          type="submit"
          name="loginMethod"
          value={loginMethod}
          onClick={() => setLoginMethod("loginOAuth")}
          className="w-full py-2 mt-4 text-white bg-red-600 hover:bg-red-700 rounded"
        >
          Login with Google
        </button>
      </form>
    </main>
  );
};

export default Login;
