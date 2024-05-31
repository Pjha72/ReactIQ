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

            <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 dark:border-zinc-800">
              <div class="px-3 py-2 border">
                <button class="flex items-center justify-between w-full group mb-1" aria-expanded="false">
                  <div className="text-md  font-semibold text-brand">
                    Key Highlight
                  </div>
                  <div className="flex items-center gap-x-2">
                    {/* <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"> */}
                      <svg
                        className="w-8 h-8 flex-shrink-0 ml-3 rounded-lg text-sm border fill-current text-gray-400 group-hover:text-gray-500 dark:bg-dark_40 border-zinc-300 dark:border-zinc-800 bg-[#fafafa]"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
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
            <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 dark:border-zinc-800">
              <div class="px-3 py-2 border">
                <button class="flex items-center justify-between w-full group mb-1" aria-expanded="false">
                  <div className="text-md  font-semibold text-brand">
                    Key Highlight
                  </div>
                  <div className="flex items-center gap-x-2">
                    {/* <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"> */}
                      <svg
                        className="w-8 h-8 flex-shrink-0 ml-3 rounded-lg text-sm border fill-current text-gray-400 group-hover:text-gray-500 dark:bg-dark_40 border-zinc-300 dark:border-zinc-800 bg-[#fafafa]"
                      >
                        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z"></path>
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
