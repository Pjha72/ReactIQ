import React from "react";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { CodeBlock, dracula } from "react-code-blocks";

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
                    Day1: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor2 }}
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
                              <th class="uppercase w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tr rounded-br">
                                Status
                              </th>
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
                  onClick={handleTextColor3}
                >
                  <span
                    className="text-lg font-semibold text-brand"
                    style={{ color: textColor3 }}
                  >
                    Day2: ReactJs CheatSheet(Basic)
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor3 }}
                  />
                </DisclosureButton>

                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    1. JavaScript XML (JSX)
                  </h2>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`// JSX Elements
let element <h1>Hello, world!</h1>; 
let emptyHeading = <h1>;
// JSX Expressions
let name='Pawan Jha';
let element = <h1>Hello, {name}</h1>;
function fullName(firstName, lastName) { 
  return firstName + ' ' + lastName; 
}
let element = <h1>Hello, {fullName('John', 'Doe')}</h1>
// JSX Attributes
const element = <img src={user.avatarUrl} />;
const element = <button className="btn">Click me</button>;
// JSX functions
name() {
  return "Rahul";
}
return (
  <h1> Hi {name()}! </h1> 
)`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    2. Functional Components
                  </h2>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`import React from "react";
// simple functional component 
export default function UserProfile() {
  return (
    <div className="UserProfile"> 
      <div>Hello</div> 
      <div>World</div> 
    </div> 
  );
}
// functional component with props
export default function Hello(props) {
  function fullName() {
    return {props.firstName} {props.lastName}; 
  }
  return (
    <p>
      {fullName()}
    </p> 
  );
}
// props
<Hello firstName "Matt" lastName="Delac" />`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    3. Embed Components
                  </h2>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`// Embed internal components
import React from 'react';
import UserAvatar from "./UserAvatar";
export default function UserProfile() {
   return (
    <div className="UserProfile"> 
      <UserAvatar /> 
      <UserAvatar/> 
    </div>
   );
}
// Embed external components
import React from 'react';
import ComponentName from 'component-name';
export default function UserProfile() {
  return (
   <div className="UserProfile"> 
    <ComponentName />
   </div>
  );
}`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    4. CSS In a React
                  </h2>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`import React from "react"; 
import "./Student.css";
export default function Student() { 
  return (
    <div className="Student">Pawan Jha</div>
  )
}`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    5. React State
                  </h2>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`import React, { useState } from "react";
export default function Hello(props) {
  let [name, setName] = useState("Pawan");
  function updateName() {
     let newName = prompt("What is your name?"); 
     setName(newName);
  }
  return (
    <div>
       <h1>{name}</h1>
       <button onClick={updateName}>Update name</button>
    </div>
  );`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    6. React Forms
                  </h2>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`import React, { useState } from "react";
export default function LoginForm() { 
  let [username, setUsername] =  useState("");
  let [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert('Loging in with {username} and {password}');
  }
  function updateUsername(event){ 
    setUsername(event.target.value); 
  }
  function updatePassword(event) { 
    setPassword(event.target.value);
  }
  return (
    <form onsubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={updateUsername} />
      <input type="password" placeholder="Password" onChange={updatePassword} />
      <input type="submit" value="Login" />
    </form>
  );
}`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    7. Map Elements
                  </h2>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`let elements = [{
name: 'one', value: 1},
name: 'two', value: 2 },
name: 'three', value: 3 }]
return ( 
<ul>
  {elements.map(function(element, index) {
    return <li key = {index}>The value for (element.name) is (element.value)</li> 
  })}
</ul>
);`}
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
                  onClick={handleTextColor4}
                >
                  <span
                    className="text-lg font-semibold text-brand"
                    style={{ color: textColor4 }}
                  >
                    Day3: ReactJs CheatSheet(II)
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor4 }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    1. Components and Hooks
                  </h2>
                  <p className="leading-relaxed">
                    Use functional components and hooks (like useState and
                    useEffect) for a more concise and modular code structure.
                  </p>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`import React, { useState, useEffect } from 'react';
const MyComponent = () → { 
  const [count, setCount] useState(0);
  useEffect(() { 
    // Effect logic.... 
  }, [count]);
  return <div>{count}</div>;
}`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    2. Conditional Rendering
                  </h2>
                  <p className="leading-relaxed">
                    Render different components or elements based on conditions
                    using the ternary operator.
                  </p>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`const MyComponent = ({ isloggedIn )) => { 
  return (
    <>
      <Nav />
      {isLoggedIn ? <UserDashboard > : <LoginScreen />}
    </>
  );
};`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    3. Controlled Components
                  </h2>
                  <p className="leading-relaxed">
                    Use controlled components to handle user input and maintain
                    the input's state within the component.
                  </p>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`import React, {useState} from 'react';
const InputForm = () => {
    const [value, setValue] = useState('');
    const handleChange = (event) => { 
      setValue(event.target.value);
    };
    return ( 
      <input type="text" value=(value) onChange={handleChange} /> 
    ); 
  }`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    4. Mapping Data
                  </h2>
                  <p className="leading-relaxed">
                    Map an array of data to JSX elements to dynamically render a
                    list of items.
                  </p>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`const MyList = ({ items }) ⇒ {
return ( 
  <ul> 
  {
    items.map((item, index) ⇒ ( 
      <li key={index}>{item}</li> 
    ))
  } 
  </ul> 
); };`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class="text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    5. Using Fragments
                  </h2>
                  <p className="leading-relaxed">
                    Use React Fragments to avoid adding unnecessary wrapping
                    elements when rendering multiple elements.
                  </p>
                  <div className="font-mono text-sm">
                    <CodeBlock
                      text={`const MyComponent = () ⇒ {
return (
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
 );
};`}
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
                  onClick={handleTextColor5}
                >
                  <span
                    className="text-lg font-semibold text-brand"
                    style={{ color: textColor5 }}
                  >
                    Day4: React Hooks
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor5 }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <p className="leading-relaxed">
                    React Hooks are built-in functions that allow you to use
                    state and other React features, like lifecycle methods and
                    context, in functional components without needing to write a
                    class component.
                  </p>
                  <h2 class=" mt-4 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    1. useState Hooks
                  </h2>
                  <p className="leading-relaxed text-justify">
                    This Hook allows you to add state to functional components.
                    The <span className="text-[#ef443a]">useState</span>{" "}
                    function returns a pair: the current state and a function
                    that updates it.
                  </p>
                  <p className="text-pink-400 font-md"> Important Point : </p>
                  <div className="text-justify">
                    <li>
                      State Name: <span className="text-rose-500">count</span>
                    </li>
                    <li>
                      Function to set state:{" "}
                      <span className="text-green-500">setCount</span>
                    </li>
                    <li>
                      Initial value: <span className="text-blue-500">0</span>
                    </li>
                    <li>
                      Updating state:{" "}
                      <span className="text-yellow-500">
                        setCount(count + 1)
                      </span>
                    </li>
                  </div>

                  <div className="font-mono text-sm ">
                    <CodeBlock
                      text={`import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class=" mt-4 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    2. useEffect Hooks
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
                  <p className="text-pink-400 font-md"> Important Point : </p>
                  <div className="text-justify">
                    <li>
                      Dependency:{" "}
                      <span className="text-rose-500">[count] </span> - This
                      code will be executed when the dependency count is
                      updated.
                    </li>
                  </div>

                  <div className="font-mono text-sm ">
                    <CodeBlock
                      text={`import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = You clicked {count} times;
    return () => {
      document.title = 'React App';
    };
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class=" mt-4 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    3. useContext Hooks
                  </h2>
                  <p className="leading-relaxed text-justify">
                    The <span className="text-[#ef443a]">useContext</span> Hook
                    in React provides a way to subscribe to React context
                    without adding nesting to your components.
                  </p>
                  <p className="text-pink-400 font-md "> Important Point : </p>
                  <div className="text-justify">
                    <li>
                      <span className="text-rose-500">ThemeContext</span> is
                      created with a default value of{" "}
                      <span className="text-rose-500">Light</span>.
                    </li>
                    <li>
                      <span className="text-green-500">ThemeProvider</span>{" "}
                      component provides the{" "}
                      <span className="text-green-500">Dark</span> theme value
                      to its children.
                    </li>
                    <li>
                      <span className="text-blue-500">ThemedButton</span>{" "}
                      consumes the{" "}
                      <span className="text-blue-500">ThemeContext</span> value
                      using the{" "}
                      <span className="text-blue-500">useContext</span> Hook and
                      displays it.
                    </li>
                  </div>

                  <div className="font-mono text-sm ">
                    <CodeBlock
                      text={`import React, { useContext, createContext } from 'react';
// Step 1: Create the context
const ThemeContext = createContext('Light');
// Step 2: Provide the context value
function ThemeProvider({ children }) {
  const theme = 'Dark'; // This could be dynamic
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}
// Step 3: Consume the context value
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button>The theme is {theme}!</button>;
}
// Use the context in your app
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}
export default App;`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>

                  <h2 class=" mt-4 text-md  text-gray-900 title-font font-bold mb-2 font-amaranth ">
                    4. useReducer Hooks
                  </h2>
                  <p className="leading-relaxed text-justify">
                    An alternative to useState. Accepts a reducer of type
                    <span className="text-[#ef443a]"> (state, action) = newState</span>, and returns the current state
                    paired with a dispatch method. 
                    <br/>
                    Example: It is particularly
                    useful when the state logic is complex and involves multiple
                    sub-values, or when the next state depends on the previous
                    one. useReducer is an alternative to useState. While
                    useState is great for handling independent pieces of state,
                    useReducer excels at handling more complex, interconnected
                    state that involves multiple changes in an atomic and
                    predictable manner.
                  </p>
                  <div className="font-mono text-sm ">
                    <CodeBlock
                      text={`import React, { useReducer } from 'react';
// Initial State:
const initialState = { count: 0 };
// Reducer Function:
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function Counter() {
  // Using useReducer:
  const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        Count: {state.count}
        // Updating State with Actions:
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </>
    );
  }`}
                      showLineNumbers
                      codeBlock
                      language="javascript"
                      theme={dracula}
                    />
                  </div>
                  {/* <section class="text-gray-600 body-font">
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
                              <th class="uppercase w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tr rounded-br">
                                Status
                              </th>
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
                  </section> */}
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
                    className="text-md font-semibold text-brand"
                    style={{ color: textColor6 }}
                  >
                    Day5: Basic
                  </span>
                  <ChevronDownIcon
                    className="size-5 fill-gray/60 group-data-[hover]:fill-gray/50 group-data-[open]:rotate-180 border-2 rounded border-emerald-400"
                    style={{ color: textColor6 }}
                  />
                </DisclosureButton>
                <DisclosurePanel className="text-lg text-gray-700 false border-amber-700 text-justify">
                  <div className="font-amaranth text-sm">
                    <CodeBlock
                      text={`function toBe() {
if (Math.random() < 0.5) {
  return true;
} else {
  return false;
}
}`}
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
