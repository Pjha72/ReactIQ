import React from "react";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { CodeBlock, dracula } from "react-code-blocks";

import envImg from "../assests/env img.png";

export default function Cheetsheet() {
  const [textColor, setTextColor] = useState("#000000");
  const [textColor1, setTextColor1] = useState("#000000");
  const [textColor2, setTextColor2] = useState("#000000");
  const [textColor3, setTextColor3] = useState("#000000");
  const [textColor4, setTextColor4] = useState("#000000");
  const [textColor5, setTextColor5] = useState("#000000");
  const [textColor6, setTextColor6] = useState("#000000");
  const [textColor7, setTextColor7] = useState("#000000");
  const [textColor8, setTextColor8] = useState("#000000");
  const [textColor9, setTextColor9] = useState("#000000");

  const handleTextColor = (e) => {
    setTextColor(textColor === "#000000" ? "#ef443a" : "#000000");
  };

  const handleTextColor1 = (e) => {
    setTextColor1(textColor1 === "#000000" ? "#ef443a" : "#000000");
  };

  const handleTextColor2 = (e) => {
    setTextColor2(textColor2 === "#000000" ? "#ef443a" : "#000000");
  };

  const handleTextColor3 = (e) => {
    setTextColor3(textColor3 === "#000000" ? "#ef443a" : "#000000");
  };

  const handleTextColor4 = (e) => {
    setTextColor4(textColor4 === "#000000" ? "#ef443a" : "#000000");
  };

  const handleTextColor5 = (e) => {
    setTextColor5(textColor5 === "#000000" ? "#ef443a" : "#000000");
  };

  const handleTextColor6 = (e) => {
    setTextColor6(textColor6 === "#000000" ? "#ef443a" : "#000000");
  };

  const handleTextColor7 = (e) => {
    setTextColor7(textColor7 === "#000000" ? "#ef443a" : "#000000");
  };

  const handleTextColor8 = (e) => {
    setTextColor8(textColor8 === "#000000" ? "#ef443a" : "#000000");
  };

  const handleTextColor9 = (e) => {
    setTextColor9(textColor9 === "#000000" ? "#ef443a" : "#000000");
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
                      ReactJs A2Z Interview Questions
                    </h2>
                    <p class="leading-relaxed">
                      Welcome to our comprehensive ReactJS Interview Questions.
                      This guide is made for people who want to learn ReactJs
                      from A to Z for free in a well-organized and structured
                      manner.
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
                      className="text-lg font-semibold text-brand"
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
                      JSX Syntax: Write HTML-like syntax within JavaScript.Use
                      curly braces {} to embed JavaScript expressions.
                    </li>
                    <li>Components: Function Components, Class Components</li>
                    <li>Lifecycle Methods (Class Components)</li>
                    <li>Hooks (Function Components): useEffect, useContext</li>
                    <li>
                      Conditional Rendering: Use ternary operators or logical &&
                      for conditionally rendering elements
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
                      className="text-lg font-semibold text-brand"
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
                  onClick={handleTextColor2}
                >
                  <span
                    className="text-lg font-semibold text-brand"
                    style={{ color: textColor2 }}
                  >
                    Day 1
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor2 }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    1. What is ReactJS?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on components,
                    particularly single-page applications where you need a fast,
                    interactive experience. It lets developers create reusable
                    UI components, making the development process more efficient
                    and the code easier to maintain. It is maintained by Meta
                    and a community of individual developers and companies.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    2. What are the key features of ReactJS?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    The key features of ReactJS are its component-based
                    architecture,
                    <li>virtual DOM implementation for efficient rendering</li>
                    <li>code reusability through reusable components</li>
                    <li>
                      declarative syntax and JSX for easier UI development
                    </li>
                    <li>unidirectional data flow for predictable updates</li>
                    <li>
                      performance optimization by minimizing direct DOM
                      manipulation
                    </li>
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    3. What is the difference between ReactJS and other
                    JavaScript frameworks/libraries?
                  </h2>
                  <section class="text-gray-600 body-font">
                    <div class="container px-5 py-19 mt-3 mx-auto">
                      <div class="lg:w-3/3 w-full mx-auto overflow-none">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                          <thead>
                            <tr>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tl rounded-bl">
                                Aspect
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                ReactJS
                              </th>
                              <th class="uppercase px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                                Other JS Frameworks/Libraries
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="px-4 py-3 text-[#ef443a]">Type</td>
                              <td class="px-4 py-3">
                                Library (focuses on the view layer)
                              </td>
                              <td class="px-4 py-3">
                                Frameworks (often full-featured, e.g., Angular,
                                Vue)
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-gray-200 px-4 py-3 text-[#ef443a]">
                                Component-Based
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Strong emphasis on reusable components
                              </td>
                              <td class="border-t-2 border-gray-200 px-4 py-3">
                                Other libraries may or may not use
                                component-based architecture
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-[#ef443a]">
                                Virtual DOM
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Uses Virtual DOM for efficient updates
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Some frameworks use real DOM, which can be
                                slower
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-[#ef443a]">
                                Flexibility
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Highly flexible; integrates with other libraries
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Often more opinionated and less flexible
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-[#ef443a]">
                                Data Binding
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                One-way data binding
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Two-way data binding (e.g., Angular)
                              </td>
                            </tr>
                            <tr>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-[#ef443a]">
                                Performance
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Known for high performance due to Virtual DOM
                              </td>
                              <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                Performance varies based on implementation
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                  <p className="leading-relaxed text-justify">
                    ReactJS is particularly popular for its simplicity,
                    flexibility, and focus on the view layer, making it a great
                    choice for building interactive user interfaces. Other
                    frameworks like Angular and Vue might provide more built-in
                    features and a more opinionated structure, which can be
                    beneficial for larger applications needing a comprehensive
                    solution.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    4. What is JSX in ReactJS?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    JSX, or JavaScript XML, is a syntax extension for JavaScript
                    used in ReactJS. It allows developers to write HTML-like
                    code within JavaScript, making it easier to create and
                    visualize the structure of the UI. JSX syntax is then
                    transformed into regular JavaScript calls by a preprocessor
                    (like Babel), enabling the integration of HTML and
                    JavaScript in a seamless way.
                    <br />
                    Example :
                  </p>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`const element = <h1>Hello, world!</h1>;`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>
                  <p className="leading-relaxed text-justify">
                    In the example above,{" "}
                    <span className="text-[#ef443a]">Hello, world!</span> is JSX
                    that gets transformed into{" "}
                    <span className="text-[#ef443a]">
                      React.createElement('h1', null, 'Hello, world!')
                    </span>{" "}
                    by the transpiler. This enables the creation of React
                    elements in a more intuitive and readable way.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    5. Explain the concept of virtual DOM in ReactJS.
                  </h2>
                  <p className="leading-relaxed text-justify">
                    A representation of a DOM with us is known as Virtual DOM.
                    Virtual DOM is a lightweight copy of the actual DOM
                    maintained by React. It allows React to efficiently update
                    and render components by calculating the optimal changes
                    needed and applying them to the real DOM.
                  </p>
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
                  onClick={handleTextColor3}
                >
                  <span
                    className="text-lg font-semibold text-brand"
                    style={{ color: textColor3 }}
                  >
                    Day 2
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor3 }}
                  />
                </DisclosureButton>

                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    1. What are the components in ReactJS?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on components,
                    particularly single-page applications where you need a fast,
                    interactive experience. It lets developers create reusable
                    UI components, making the development process more efficient
                    and the code easier to maintain. It is maintained by Meta
                    and a community of individual developers and companies.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    2. What is the significance of state in ReactJS?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on components,
                    particularly single-page applications where you need a fast,
                    interactive experience. It lets developers create reusable
                    UI components, making the development process more efficient
                    and the code easier to maintain. It is maintained by Meta
                    and a community of individual developers and companies.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    3. What is the difference between props and state?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on components,
                    particularly single-page applications where you need a fast,
                    interactive experience. It lets developers create reusable
                    UI components, making the development process more efficient
                    and the code easier to maintain. It is maintained by Meta
                    and a community of individual developers and companies.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    4. What is the purpose of the "render" method in ReactJS?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on components,
                    particularly single-page applications where you need a fast,
                    interactive experience. It lets developers create reusable
                    UI components, making the development process more efficient
                    and the code easier to maintain. It is maintained by Meta
                    and a community of individual developers and companies.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    5. What are the lifecycle methods in ReactJS and how do they work?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    React is a free and open-source front-end JavaScript library
                    for building user interfaces based on components,
                    particularly single-page applications where you need a fast,
                    interactive experience. It lets developers create reusable
                    UI components, making the development process more efficient
                    and the code easier to maintain. It is maintained by Meta
                    and a community of individual developers and companies.
                  </p>
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
                  onClick={handleTextColor4}
                >
                  <span
                    className="text-lg font-semibold text-brand"
                    style={{ color: textColor4 }}
                  >
                    Day 3
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor4 }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    1. What is a higher-order component (HOC) in ReactJS?
                  </h2>
                  <p className="leading-relaxed">
                    Use functional components and hooks (like useState and
                    useEffect) for a more concise and modular code structure.
                  </p>
                  

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    2. What is the purpose of the "key" prop in ReactJS?
                  </h2>
                  <p className="leading-relaxed">
                    Render different components or elements based on conditions
                    using the ternary operator.
                  </p>
                  

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    3. Explain the concept of controlled and uncontrolled components in ReactJS.
                  </h2>
                  <p className="leading-relaxed">
                    Use controlled components to handle user input and maintain
                    the input's state within the component.
                  </p>
                  

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    4. What is the purpose of the "setState" method in ReactJS and how does it work?
                  </h2>
                  <p className="leading-relaxed">
                    Map an array of data to JSX elements to dynamically render a
                    list of items.
                  </p>
                  

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    5. What is the significance of the "React.Fragment" component?
                  </h2>
                  <p className="leading-relaxed">
                    Use React Fragments to avoid adding unnecessary wrapping
                    elements when rendering multiple elements.
                  </p>
                  
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
                  onClick={handleTextColor5}
                >
                  <span
                    className="text-lg font-semibold text-brand"
                    style={{ color: textColor5 }}
                  >
                    Day 4
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor5 }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <h2 class=" mt-4 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    1. How does React handle event handling?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    This Hook allows you to add state to functional components.
                    The <span className="text-[#ef443a]">useState</span>{" "}
                    function returns a pair: the current state and a function
                    that updates it.
                  </p>

                  <h2 class=" mt-4 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    2. What are the differences between class components and functional components in ReactJS?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    This Hook lets you perform side effects in functional
                    components. It's a close replacement for{" "}
                    <span className="text-[#ef443a]">componentDidMount</span>,
                    <span className="text-[#ef443a]"> componentDidUpdate</span>,
                    and{" "}
                    <span className="text-[#ef443a]">componentWillUnmount</span>{" "}
                    in class components.
                  </p>

                  <h2 class=" mt-4 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    3. How can you optimize the performance of React applications?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    The <span className="text-[#ef443a]">useContext</span> Hook
                    in React provides a way to subscribe to React context
                    without adding nesting to your components.
                  </p>

                  <h2 class=" mt-4 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    4. What is React Router and how does it work?
                  </h2>
                  <p className="leading-relaxed text-justify">
                    An alternative to useState. Accepts a reducer of type
                    <span className="text-[#ef443a]">
                      {" "}
                      (state, action) = newState
                    </span>
                    , and returns the current state paired with a dispatch
                    method.
                    <br />
                    Example: It is particularly useful when the state logic is
                    complex and involves multiple sub-values, or when the next
                    state depends on the previous one. useReducer is an
                    alternative to useState. While useState is great for
                    handling independent pieces of state, useReducer excels at
                    handling more complex, interconnected state that involves
                    multiple changes in an atomic and predictable manner.
                  </p>

                  <h2 class=" mt-4 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    4. Explain the concept of React Hooks and their benefits.
                  </h2>
                  <p className="leading-relaxed text-justify">
                    An alternative to useState. Accepts a reducer of type
                    <span className="text-[#ef443a]">
                      {" "}
                      (state, action) = newState
                    </span>
                    , and returns the current state paired with a dispatch
                    method.
                    <br />
                    Example: It is particularly useful when the state logic is
                    complex and involves multiple sub-values, or when the next
                    state depends on the previous one. useReducer is an
                    alternative to useState. While useState is great for
                    handling independent pieces of state, useReducer excels at
                    handling more complex, interconnected state that involves
                    multiple changes in an atomic and predictable manner.
                  </p>
                  
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
                  onClick={handleTextColor6}
                >
                  <span
                    className="text-lg font-semibold text-brand"
                    style={{ color: textColor6 }}
                  >
                    Day5: React .env File Usage
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor6 }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    1. .env File Usage
                  </h2>
                  <p className="leading-relaxed text-justify">
                    The <span className="text-[#ef443a]">.env</span> file is
                    commonly used to store environment variables. These
                    variables are configuration values that can be used to
                    customize the behaviour of your application depending on the
                    environment it’s running in (e.g., development, production,
                    keys, etc.). React applications often use environment
                    variables to store sensitive information or configuration
                    settings.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    2. Create an .env file
                  </h2>
                  <div className="flex">
                    <img
                      className="size-28 float-left rounded-lg"
                      src={envImg}
                    />
                    <p className="leading-relaxed text-justify">
                      In the root of your React project, create a file named{" "}
                      <span className="text-[#ef443a]">.env</span>, you can also
                      have specific environment files like{" "}
                      <span className="text-[#ef443a]">.env.development</span>{" "}
                      and
                      <span className="text-[#ef443a]"> .env.production</span>,
                      etc., to manage different configurations for different
                      environments.
                    </p>
                  </div>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    3. Add Variable
                  </h2>
                  <p className="leading-relaxed">
                    Inside the <span className="text-[#ef443a]">.env</span>{" "}
                    file, you can define variables like this:
                  </p>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`// With VITE
VITE_API_KEY = your_api_key
VITE_API_URL = https://api.example.com
// With Create React App
REACT_APP_API_KEY = your_api_key
REACT_APP_API_URL = https://api.example.com`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>
                  <p className="leading-relaxed text-justify">
                    <span className="text-[#ef443a]">Note </span>
                    that variable names must start with{" "}
                    <span className="text-[#ef443a]">REACT_APP_ </span>to be
                    recognized by Create React App &{" "}
                    <span className="text-[#ef443a]">VITE_ </span>by Vite. This
                    prefix is a safety feature to avoid accidentally exposing
                    private keys.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    4. Access the variables
                  </h2>
                  <p className="leading-relaxed text-justify">
                    In your React components or other parts of your code, you
                    can access these variables like this:
                  </p>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`// With VITE
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;       
// With Create React App
const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>
                  <p className="leading-relaxed text-justify">
                    Remember that these values are available at build time, so
                    if you change them, you'll need to restart your development
                    server or rebuild your application.
                  </p>

                  <h2 class="mt-3 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    5. Use variables in configuration files
                  </h2>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;
const fetchData = async () => {
  const response = await fetch(apiUrl, {
    headers: {
      "Authorization": Bearer {apiKey},
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    console.log(await response.json());
  } else {
    console.error(Error {response.status});
  }
};
export default fetchData;`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>
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
                  onClick={handleTextColor7}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor7 }}
                  >
                    Day6: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor7 }}
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
                  onClick={handleTextColor8}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor8 }}
                  >
                    Day7: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor8 }}
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
                  onClick={handleTextColor9}
                >
                  <span
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor9 }}
                  >
                    Day8: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor9 }}
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

          {/* <div class="w-full mt-4 flex bg-white dark:bg-dark_50 flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] false rounded-md border border-gray-200 white:border-zinc-800 hover:shadow-xl">
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
          </div> */}
        </div>
      </main>
    </>
  );
}
