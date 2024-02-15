"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ContentDisplayContext } from "../helpers/ContextProvider";
import { UserButton, SignedOut, useUser } from "@clerk/nextjs";
type Props = {};

const Header = (props: Props) => {
  const { setSection, activeSection } = useContext(ContentDisplayContext);
  const { user } = useUser();
  return (
    <header className="border-lime-100 border-b-2  ">
      <SignedOut>
        <Link className="mr-5" href={"/sign-in"}>
          Sign in
        </Link>
        <Link href={"/sign-up"}>Sign up</Link>
      </SignedOut>

      <div className="md:px-4 px-1 py-3 md:py-7">
        {user && (
          <>
            <div className="flex gap-3 items-center justify-between mb-3">
              <div className="flex items-center gap-2">
              <UserButton afterSignOutUrl="/" />
              <p className="text-[.6rem]">Your account</p>
              </div>
              <p>Hello {user.firstName}</p>
            </div>
            <ul className="md:px-2 flex justify-between sm:gap-2 mb-2 md:w-[80%] mx-auto text-[.8rem] md:text-[1rem]">
              <li
                className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${
                  activeSection === "todo" && "bg-purple-700"
                }`}
                onClick={() => setSection && setSection("todo")}
              >
                To Do
              </li>
              <li
                className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${
                  activeSection === "tobuy" && "bg-purple-700"
                }`}
                onClick={() => setSection && setSection("tobuy")}
              >
                To Buy
              </li>
              <li
                className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${
                  activeSection === "expenses" && "bg-purple-700"
                }`}
                onClick={() => setSection && setSection("expenses")}
              >
                Expenses
              </li>
              <li
                className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${
                  activeSection === "meals" && "bg-purple-700"
                }`}
                onClick={() => setSection && setSection("meals")}
              >
                Meals
              </li>
              <li
                className={`cursor-pointer w-max rounded-xl px-2 py-1 hover:text-purple-400 ${
                  activeSection === "ideas" && "bg-purple-700"
                }`}
                onClick={() => setSection && setSection("ideas")}
              >
                Ideas
              </li>
            </ul>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
