"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
