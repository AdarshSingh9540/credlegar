"use client";

import { ReactNode, createContext, useContext } from "react";
import { UserData } from "./ServerLayout";

const UserContext = createContext<UserData | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default function ClientLayout({
  children,
  userData,
}: {
  children: ReactNode;
  userData: UserData;
}) {
  return (
    <UserContext.Provider value={userData}>
      <div className="">{children}</div>
    </UserContext.Provider>
  );
}
