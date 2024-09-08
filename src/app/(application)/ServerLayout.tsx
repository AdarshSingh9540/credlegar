import { ReactNode } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "../db";
import ClientLayout from "@/app/(application)/ClientLayout";

export interface UserData {
  email: string;
  lastName: string | null;
  firstName: string | null;
  profilePic: string | null;
}

export default async function ServerLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email) {
    redirect("/");
  }

  let userData: UserData;

  const existingUser = await prisma.user.findUnique({
    where: { email: user.email },
  });
  console.log(existingUser);
  if (!existingUser) {
    userData = await prisma.user.create({
      data: {
        email: user.email,
        lastName: user.family_name ?? "",
        firstName: user.given_name ?? "",
        profilePic: user.picture ?? "",
      },
    });
  } else {
    userData = existingUser;
  }

  return <ClientLayout userData={userData}>{children}</ClientLayout>;
}
