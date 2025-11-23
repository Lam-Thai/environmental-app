import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8"></div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
            Sign in
          </h2>

          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <Link href="/home">
              <button
                type="button"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Login
              </button>
            </Link>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don&apos;t have account yet?{" "}
            <Link
              href="/signup"
              className="text-green-600 font-semibold hover:underline"
            >
              Create new account
            </Link>
          </p>
        </div>

        <div className="text-center mt-6">
          <Image
            src="/Group 1.svg"
            alt="RELEAF Logo"
            width={64}
            height={64}
            className="inline-block"
          />
          <p className="text-green-600 font-bold mt-2">RELEAF</p>
        </div>
      </div>
    </div>
  );
}
