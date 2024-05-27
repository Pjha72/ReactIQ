import React from "react";
import logo from "../assests/logo1.png";

export default function Signout() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="RPS Logo" />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-mono">
            ReactPrep Station
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              {/* Username filed */}
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="text"
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username"
                />
              </div>
            </div>
            {/* Password filed */}
            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
              </div>
              {/* Confirm-Password filed */}
              <div>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Confirm-Password"
                />
              </div>
              </div>
              {/* E-mail filed */}
              <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="E-mail Address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-400">
            Have an account?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
          </p>
          <p className="mt-5 text-center text-sm text-gray-400">
            or you can sign in with
          </p>
          <div className="mt-3 flex justify-center sm:mx-auto sm:w-full sm:max-w-sm space-x-4">
            <img
              className="h-5 w-auto rounded-full border-solid border-2 border-red-500 cursor-pointer bg-gray-400 hover:bg-gray-900"
              src="https://toppng.com/uploads/preview/google-logo-transparent-png-11659866441wanynck5pd.png"
              alt="Google"
            />
            <img
              className="h-5 w-auto rounded-full cursor-pointer"
              src="https://i.pinimg.com/originals/48/e0/73/48e07378e01dd719c060c1f2f2b5cb00.png"
              alt="GitHub"
            />
            <img
              className="h-5 w-auto rounded-full border-solid border-2 border-sky-500 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7ylSJeYnO1zUx3m8VmsJC3PBornZXnk_mg&s"
              alt="LinkedIn"
            />
          </div>
        </div>
      </div>
    </>
  );
}
