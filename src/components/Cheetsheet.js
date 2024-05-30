import React from "react";

export default function Cheetsheet() {
  return (
    <>
      <main>
        <div className="mt-90 mx-auto max-w-7xl  sm:px-6 lg:px-8  rounded-lg">
          <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-12 mx-auto">
              <div class="-my-8 divide-y-2 divide-gray-100">
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:flex-grow">
                    <h2 class="text-3xl  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                      ReactJs A2Z CheatSheet
                    </h2>
                    <p class="leading-relaxed">
                      Welcome to our comprehensive ReactJS cheatsheet. This
                      guide is made for people who want to learn ReactJs from A
                      to Z for free in a well-organized and structured manner.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="ml-6 items-left mb-3">
              <div class="relative group">
                <button class="flex items-center justify-between w-full rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <div className="text-md  font-semibold text-brand">
                    Key Highlight
                  </div>
                  <div className="flex items-center gap-x-2">
                    {/* <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"> */}
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    {/* </span> */}
                  </div>
                </button>
                <div className="text-sm text-gray-900 false">
                    <div className="flex flex-col text-lg space-y-4 p-4">
                        <div className="flex flex-col items-start gap-y-1">
                            <li>Teaches you problem solving by diving deep into DSA, with 450+ modules.</li>
                            <li>In-depth video solutions covering brute, better, optimal solutions.</li>
                            <li>Well structured articles/notes for quick revision.</li>
                            <li>C++, Java, Python, and Javascript code.</li>
                            <li>Company tags associated with each problem.</li>
                            <li>Notes section to save your notes for quick revision.</li>
                            <li>Notes section to save your notes for quick revision.</li>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="ml-6 items-left">
              <div class="relative">
                <select class=" block w-full rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </section>
          {/* Steps */}
          <div class="ml-6 items-left">
            <input type="text" />
            <div class="relative ">
              <select class=" block w-full rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
