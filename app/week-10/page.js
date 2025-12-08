"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  return (
    <main>
      <header>
        {user ? (
          <section>
            <div>
              <p>Welcome,{user.displayName}</p>
              <p>{user.email}</p>
              <img src={user.photoURL} className="w-10 h-10" />
            </div>
            <Link
              href="/week-10/shopping-list"
              className="inline-block mt-4 text-lg bg-gray-500 text-white rounded px-2 py-1 hover:bg-green-600"
            >
              Go to Shopping List
            </Link>
            <div>
              <button
                type="button"
                onClick={handleSignOut}
                className="text-lg bg-blue-500 text-white rounded px-2 py-1 mt-4 hover:bg-blue-600 cursor-pointer"
              >
                {" "}
                Sign Out
              </button>
            </div>
          </section>
        ) : (
          <section>
            <button
              type="button"
              onClick={handleSignIn}
              className="text-lg bg-blue-500 text-white rounded px-2 py-1 mt-4 hover:bg-blue-600 cursor-pointer"
            >
              Sign In with GitHub
            </button>
          </section>
        )}
      </header>
    </main>
  );
}

{
  /*// Sign in to Firebase with GitHub authentication
await gitHubSignIn();

// Sign out of Firebase
await firebaseSignOut();

// Display some of the user's information
<p>
  Welcome, {user.displayName} ({user.email})
</p>;*/
}
