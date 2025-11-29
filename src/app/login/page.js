import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block mb-6 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/Group 1.svg"
              alt="RELEAF Logo"
              width={120}
              height={120}
              priority
              className="drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            RELEAF
          </h1>
          <p className="text-gray-600 mt-2">Welcome back to a greener future</p>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl p-8 backdrop-blur-sm bg-opacity-95">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Sign in
          </h2>

          <form className="space-y-5">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all duration-200 border border-gray-200"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-4 top-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all duration-200 border border-gray-200"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-4 top-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            <Link href="/home">
              <button
                type="button"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Login
              </button>
            </Link>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              Create new account
            </Link>
          </p>
        </div>

        <div className="text-center mt-8">
          <Image
            src="/Group 1.svg"
            alt="RELEAF Logo"
            width={64}
            height={64}
            className="inline-block opacity-75"
          />
          <p className="text-emerald-600 font-bold mt-2">RELEAF</p>
          <p className="text-gray-500 text-xs mt-1">
            Protecting our planet together
          </p>
        </div>
      </div>
    </div>
  );
}
