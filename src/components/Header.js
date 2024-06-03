import React from "react";
import Logo from "../assests/riq.png";
import { Link } from "react-router-dom";
import Logo1 from "../assests/logo1.png";

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
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Login from "../components/Signin.js"
/**
 * Header component
 * 1. logo
 * 2. Explore
 * 3. Problems
 * 4. Contest
 * 5. Discuss
 * 6. Interview
 * 7. Sigin
 */

const Header = () => {
  const user = {
    name: "Pawan Jha",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  const navigation = [
    { name: "Explore", href: "#", current: true },
    { name: "Problems", href: "/problems", current: false },
    { name: "Contest", href: "#", current: false },
    { name: "Discuss", href: "#", current: false },
    { name: "Interview", href: "/interview", current: false },
    { name: "CheatSheet", href: "/cheatsheet", current: false },
    { name: "Roadmap", href: "/roadmap", current: false },
  ];

  const userNavigation = [
    { name: "Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Log out", href: "/login" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white-800 shadow-xl rounded">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src={Logo1}
                        alt="logo"
                        className="h-8 w-8 cursor-pointer"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-0 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? " text-gray-400 hover:text-gray-900"
                                : "text-gray-400 hover:text-gray-900",
                              "rounded-md px-3 py-2 text-md font-semibold"
                            )}
                            aria-current={item.current ? " page" : "undefined"}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-white-800 p-1 text-white-400 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </MenuButton>
                        </div>
                        <Transition
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <MenuItem key={item.name}>
                                {({ focus }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      focus ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>
              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        {/* <header
          className="flex justify-between items-center px-3
        max-w-6xl mx-auto"
        >
          <div className="flex-shrink-0"></div>
          <div>
            <ul className="flex space-x-10">
              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent hover:text-gray-900`}
              >
                Explore
              </li>
              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent hover:text-gray-900`}
              >
                Problems
              </li>
              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent hover:text-gray-900`}
              >
                Contest
              </li>
              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent hover:text-gray-900`}
              >
                Discuss
              </li>
              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent hover:text-gray-900`}
              >
                Interview
              </li>
              <li
                className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent hover:text-gray-900`}
              >
                Register <span>or </span>
                <span
                  className={`cursor-pointer py-3 text-md font-semibold text-gray-400 border-b-[3px] border-b-transparent hover:text-gray-900`}
                >
                  Signin
                </span>
              </li>
            </ul>
          </div>
        </header> */}

        
      </div>
    </>
  );
};

export default Header;
