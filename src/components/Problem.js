import React from "react";
import { BsFileEarmarkPlayFill } from "react-icons/bs";
import { TbCheckbox } from "react-icons/tb";

export default function Problem() {
  return (
    <>
      <main>
        <div className="mt-110 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Course Image */}
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
                <div className="flex flex-row relative space-x-10">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 shadow-xl lg:aspect-none group-hover:opacity-75 lg:h-36">
                    <img
                      src="https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg"
                      alt="RPS C1"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 shadow-xl  lg:aspect-none group-hover:opacity-75 lg:h-36">
                    <img
                      src="https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png"
                      alt="RPS C2"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 shadow-xl  lg:aspect-none group-hover:opacity-75 lg:h-36">
                    <img
                      src="https://assets.leetcode.com/users/images/b0a08a5c-c575-48f6-9110-b6ae4e011e98_1655746322.579097.png"
                      alt="RPS C3"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table  */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-15 mx-auto">
              <div className="lg:w-3/3 w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        Title
                      </th>

                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Solution
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Acceptance
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Difficulty
                      </th>
                      <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3">Show/Hide title</td>
                      <td className="px-4 py-3 text-sky-400">
                        <BsFileEarmarkPlayFill />
                      </td>
                      <td className="px-4 py-3">54%</td>
                      <td className="px-4 py-3 text-md text-teal-400">Easy</td>
                      <td className="w-10 text-center text-orange-500">
                        <TbCheckbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        Stopwatch/Timer
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-sky-400">
                        <BsFileEarmarkPlayFill />
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                      34%
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-md text-teal-400">
                        Easy
                      </td>
                      <td className="border-t-2 border-gray-200 w-10 text-center text-orange-500">
                        <TbCheckbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        Todo List
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-sky-400">
                        <BsFileEarmarkPlayFill />
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3">
                        40%
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-md text-teal-400">
                        Easy
                      </td>
                      <td className="border-t-2 border-gray-200 w-10 text-center text-orange-500">
                      <TbCheckbox />
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Progress Bar
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sky-400">
                        <BsFileEarmarkPlayFill />
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        20%
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-md text-yellow-400">
                        Medium
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center text-orange-500">
                      <TbCheckbox />
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Submit Form Data
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sky-400">
                        <BsFileEarmarkPlayFill />
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        70%
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-md text-teal-400">
                        Easy
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center text-orange-500">
                      <TbCheckbox />
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Max Count
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-sky-400">
                        <BsFileEarmarkPlayFill />
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        80%
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-md text-yellow-400">
                        Medium
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center text-orange-500">
                      <TbCheckbox />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
