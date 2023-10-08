"use client";
import Link from "next/link";
import { React } from "react";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLineCap="round"
              strokeLineJoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-700 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">My To Do App</span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/add" className="mr-5 hover:text-sky-500">
              Add a To-Do
            </Link>
            <Link href="#" className="mr-5 hover:text-sky-500">
              My To-Do's
            </Link>
          </nav>
          <Link
            href="/login"
            className="inline-flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 font-medium px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded text-base mt-4 md:mt-0"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 font-medium px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded text-base mt-4 md:mt-0"
          >
            Sign Up
          </Link>
        </div>
      </header>
    </>
  );
}
