import React from "react";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Cheetsheet() {
  const [textColor, setTextColor] = useState("#000000");
  const [textColor1, setTextColor1] = useState("#000000");

  const handleTextColor = (e) => {
    setTextColor(textColor === "#000000" ? "#ef443a" : "#000000");
    console.log(textColor);
  };

  const handleTextColor1 = (e) => {
    setTextColor1(textColor1 === "#000000" ? "#ef443a" : "#000000");
    console.log(textColor);
  };
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

            <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800">
              <div class="px-3 py-2 border">
                <Disclosure as="div" defaultOpen={false}>
                  <DisclosureButton
                    class="flex items-center justify-between w-full group mb-1"
                    aria-expanded="false"
                    onClick={handleTextColor}
                  >
                    <span
                      className="text-md font-semibold text-brand"
                      style={{ color: textColor }}
                    >
                      Key Highlight
                    </span>
                    <ChevronDownIcon
                      className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                      style={{ color: textColor }}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="text-lg text-gray-700 false border-amber-700">
                    {/* <div className="flex flex-col text-lg space-y-4 p-4">
                    <div className="flex flex-col items-start gap-y-1"> */}
                    <li>
                      Teaches you problem solving by diving deep into DSA, with
                      450+ modules.
                    </li>
                    <li>
                      In-depth video solutions covering brute, better, optimal
                      solutions.
                    </li>
                    <li>Well structured articles/notes for quick revision.</li>
                    <li>C++, Java, Python, and Javascript code.</li>
                    <li>Company tags associated with each problem.</li>
                    <li>
                      Notes section to save your notes for quick revision.
                    </li>
                    <li>
                      Notes section to save your notes for quick revision.
                    </li>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>

            <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800">
              <div class="px-3 py-2 border">
                <Disclosure as="div" defaultOpen={false}>
                  <DisclosureButton
                    class="flex items-center justify-between w-full group mb-1"
                    aria-expanded="false"
                    onClick={handleTextColor1}
                  >
                    <span
                      className="text-md font-semibold text-brand"
                      style={{ color: textColor1 }}
                    >
                      Note
                    </span>
                    <ChevronDownIcon
                      className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                      style={{ color: textColor1 }}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                    {/* <div className="flex flex-col text-lg space-y-4 p-4">
                    <div className="flex flex-col items-start gap-y-1"> */}
                    <li>
                      The Series doesn’t focus on any specific programming
                      language. Instead, it emphasizes logic and uses
                      pseudocode.
                    </li>
                    <li>
                      The first two basic videos might use C++, but for Java
                      tutorials, you can watch other YouTube videos. When
                      tackling core problems of data structures and algorithms
                      (DSA), the Series uses pseudocode that isn’t tied to any
                      particular programming language.
                    </li>
                    <li>
                      However, you can find code examples in your preferred
                      language in the notes and articles provided.
                    </li>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </section>
          {/* Steps */}
          <div class="w-full mt-16 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day1: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <section class="text-gray-600 body-font">
                    <div class="container px-5 py-19 mt-3 mx-auto">
                      <div class="lg:w-3/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tl rounded-bl">
                                Problem
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Article
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                YOuTube
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Note
                              </th>
                              <th class="uppercase w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tr rounded-br">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="px-4 py-3">Start</td>
                              <td class="px-4 py-3">5 Mb/s</td>
                              <td class="px-4 py-3">15 GB</td>
                              <td class="px-4 py-3 text-lg text-gray-900">
                                Free
                              </td>
                              <td class="w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Pro
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $24
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Business
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                36 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                40 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $50
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Exclusive
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                48 Mb/s
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                120 GB
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $72
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day2: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-19 mt-3 mx-auto">
                      <div class="lg:w-3/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tl rounded-bl">
                                Problem
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Article
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                YOuTube
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Note
                              </th>
                              <th class="uppercase w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tr rounded-br">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="px-4 py-3">Start</td>
                              <td class="px-4 py-3">5 Mb/s</td>
                              <td class="px-4 py-3">15 GB</td>
                              <td class="px-4 py-3 text-lg text-gray-900">
                                Free
                              </td>
                              <td class="w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Pro
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $24
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Business
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                36 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                40 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $50
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Exclusive
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                48 Mb/s
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                120 GB
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $72
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day3: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-19 mt-3 mx-auto">
                      <div class="lg:w-3/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tl rounded-bl">
                                Problem
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Article
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                YOuTube
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Note
                              </th>
                              <th class="uppercase w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tr rounded-br">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="px-4 py-3">Start</td>
                              <td class="px-4 py-3">5 Mb/s</td>
                              <td class="px-4 py-3">15 GB</td>
                              <td class="px-4 py-3 text-lg text-gray-900">
                                Free
                              </td>
                              <td class="w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Pro
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $24
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Business
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                36 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                40 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $50
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Exclusive
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                48 Mb/s
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                120 GB
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $72
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day4: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-19 mt-3 mx-auto">
                      <div class="lg:w-3/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tl rounded-bl">
                                Problem
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Article
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                YOuTube
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Note
                              </th>
                              <th class="uppercase w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tr rounded-br">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="px-4 py-3">Start</td>
                              <td class="px-4 py-3">5 Mb/s</td>
                              <td class="px-4 py-3">15 GB</td>
                              <td class="px-4 py-3 text-lg text-gray-900">
                                Free
                              </td>
                              <td class="w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Pro
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $24
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Business
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                36 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                40 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $50
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Exclusive
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                48 Mb/s
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                120 GB
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $72
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day5: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-19 mt-3 mx-auto">
                      <div class="lg:w-3/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tl rounded-bl">
                                Problem
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Article
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                YOuTube
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Note
                              </th>
                              <th class="uppercase w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tr rounded-br">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="px-4 py-3">Start</td>
                              <td class="px-4 py-3">5 Mb/s</td>
                              <td class="px-4 py-3">15 GB</td>
                              <td class="px-4 py-3 text-lg text-gray-900">
                                Free
                              </td>
                              <td class="w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Pro
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                25 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $24
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Business
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                36 Mb/s
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                40 GB
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $50
                              </td>
                              <td class="border-t-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Exclusive
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                48 Mb/s
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                120 GB
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                $72
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                <input name="plan" type="checkbox" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day6: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <li>
                    The Series doesn’t focus on any specific programming
                    language. Instead, it emphasizes logic and uses pseudocode.
                  </li>
                  <li>
                    The first two basic videos might use C++, but for Java
                    tutorials, you can watch other YouTube videos. When tackling
                    core problems of data structures and algorithms (DSA), the
                    Series uses pseudocode that isn’t tied to any particular
                    programming language.
                  </li>
                  <li>
                    However, you can find code examples in your preferred
                    language in the notes and articles provided.
                  </li>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day7: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <li>
                    The Series doesn’t focus on any specific programming
                    language. Instead, it emphasizes logic and uses pseudocode.
                  </li>
                  <li>
                    The first two basic videos might use C++, but for Java
                    tutorials, you can watch other YouTube videos. When tackling
                    core problems of data structures and algorithms (DSA), the
                    Series uses pseudocode that isn’t tied to any particular
                    programming language.
                  </li>
                  <li>
                    However, you can find code examples in your preferred
                    language in the notes and articles provided.
                  </li>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day8: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <li>
                    The Series doesn’t focus on any specific programming
                    language. Instead, it emphasizes logic and uses pseudocode.
                  </li>
                  <li>
                    The first two basic videos might use C++, but for Java
                    tutorials, you can watch other YouTube videos. When tackling
                    core problems of data structures and algorithms (DSA), the
                    Series uses pseudocode that isn’t tied to any particular
                    programming language.
                  </li>
                  <li>
                    However, you can find code examples in your preferred
                    language in the notes and articles provided.
                  </li>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day9: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <li>
                    The Series doesn’t focus on any specific programming
                    language. Instead, it emphasizes logic and uses pseudocode.
                  </li>
                  <li>
                    The first two basic videos might use C++, but for Java
                    tutorials, you can watch other YouTube videos. When tackling
                    core problems of data structures and algorithms (DSA), the
                    Series uses pseudocode that isn’t tied to any particular
                    programming language.
                  </li>
                  <li>
                    However, you can find code examples in your preferred
                    language in the notes and articles provided.
                  </li>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
            <div class="px-3 py-2 border">
              <Disclosure as="div" defaultOpen={false}>
                <DisclosureButton
                  class="flex items-center justify-between w-full group mb-1"
                  aria-expanded="false"
                  onClick={handleTextColor1}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor1 }}
                  >
                    Day10: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <li>
                    The Series doesn’t focus on any specific programming
                    language. Instead, it emphasizes logic and uses pseudocode.
                  </li>
                  <li>
                    The first two basic videos might use C++, but for Java
                    tutorials, you can watch other YouTube videos. When tackling
                    core problems of data structures and algorithms (DSA), the
                    Series uses pseudocode that isn’t tied to any particular
                    programming language.
                  </li>
                  <li>
                    However, you can find code examples in your preferred
                    language in the notes and articles provided.
                  </li>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
