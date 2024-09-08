"use server";
import prisma from "./app/db";
export async function getUserFromDb(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
    include: {
      workExperiences: true,
    },
  });

  if (user?.workExperiences.length !== 0) {
    return true;
  }
  return false;
}
