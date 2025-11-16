"use client"; // Important if you use hooks like useState, useEffect

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/"); // redirect to home if already signed in
    }
  }, [session, router]);

  if (session) return <p>Redirecting...</p>;

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn()}>Sign in with Provider</button>
    </div>
  );
}
