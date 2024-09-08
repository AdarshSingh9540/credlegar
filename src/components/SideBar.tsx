"use client";

import React from "react";
import { Calendar, Menu, PlusSquare, Search } from "lucide-react";
import Link from "next/link";
import { UserData } from "@/app/(application)/ServerLayout";

interface ComponentProps {
  user: UserData | null;
}

export const Sidebar = ({ user }: ComponentProps) => {
  if (user === null) {
    return;
  }
  // const {getUser} = getKindeServerSession();
  // const user = await getUser();
  const sidebarItems = [
    { icon: <Search size={18} />, text: "Search", href: "/" },
    { icon: <PlusSquare size={18} />, text: "Home", href: "/" },
    { icon: <Calendar size={18} />, text: "Calendar", href: "/" },
  ];

  return (
    <div className="h-screen overflow-y-auto fixed top-0 left-0 z-50 w-64 text-gray-100 ">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full">
              <img src={user?.profilePic} alt="User Avatar" />
            </div>
            <span className="font-semibold text-lg">{user.firstName}</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 lg:space-y-2">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 py-2 px-3 rounded"
            >
              {item.icon}
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 border-t-2 border-gray-600">
          <h3 className="text-xs font-semibold mb-2 hidden lg:block mt-6">
            Private
          </h3>
          <div className="py-2 px-2 cursor-pointer hover:bg-gray-200 rounded flex items-center mt-4 lg:mt-0">
            <Link href="/" className="flex items-center space-x-2">
              {/* <span className="material-symbols-outlined">dashboard</span> */}
              <span>DashBoard</span>
            </Link>
          </div>
          <div className="py-2 px-2 cursor-pointer hover:bg-gray-200 rounded flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* <span className="material-symbols-outlined">add_task</span> */}
              <span>TaskList</span>
            </Link>
          </div>
          <div className="py-2 px-2 cursor-pointer hover:bg-gray-200 rounded flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* <span className="material-symbols-outlined">diversity_3</span> */}
              <span>All Members</span>
            </Link>
          </div>
          <div className="py-2 px-2 cursor-pointer hover:bg-gray-200 rounded flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* <span className="material-symbols-outlined">settings</span> */}
              <span>Setting</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
