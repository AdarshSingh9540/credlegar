// app/profile/[id]/page.tsx
import { notFound } from "next/navigation";
import EnhancedProfilePage from "@/components/ProfilePage";
import prisma from "@/app/db";
import { mockCertificationData } from "@/components/MockData";

export async function generateStaticParams() {
  const users = await prisma.user.findMany({
    select: { id: true },
  });

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}

export default async function PublicProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const userId = parseInt(params.id, 10);

  if (isNaN(userId)) {
    notFound();
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { workExperiences: true },
  });

  if (!user) {
    notFound();
  }

  return (
    <EnhancedProfilePage
      //@ts-ignore
      jobDetails={user.workExperiences}
      certificationData={mockCertificationData}
      userName={user.firstName || "NaN"}
      userEmail={user.email}
      isPublicProfile={true}
    />
  );
}
