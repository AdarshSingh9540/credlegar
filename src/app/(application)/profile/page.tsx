// app/profile/page.tsx
import React from "react";
import EnhancedProfilePage from "@/components/ProfilePage";
import { mockCertificationData } from "@/components/MockData";
import prisma from "@/app/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import PublishButton from "@/components/PublishButton";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const userAuth = await getUser();
  const user = await prisma.user.findUnique({
    where: { email: userAuth.email! },
    include: { workExperiences: true },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  // Check if the profile exists
  const profileExists = await prisma.user.findUnique({
    where: { id: user.id },
    select: { profile: true },
  });

  return (
    <div>
      <div className="flex justify-end mb-4">
        <PublishButton
          userId={user.id}
          profileExists={!!profileExists?.profile}
        />
      </div>
      <EnhancedProfilePage
        //@ts-ignore
        JobDetails={user.workExperiences}
        certificationData={mockCertificationData}
      />
    </div>
  );
}
