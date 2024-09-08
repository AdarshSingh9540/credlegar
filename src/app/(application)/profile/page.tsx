import React from 'react';
import EnhancedProfilePage from '@/components/ProfilePage';
import { mockCertificationData, mockJourneyData } from '@/components/MockData';
import prisma from '@/app/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function page() {
  const {getUser}=getKindeServerSession()
  const userAuth = await getUser()
  const user = await prisma.user.findUnique({where:{
    email:userAuth.email!
  },include:{
    workExperiences:true
  }})
  console.log(user?.workExperiences)
  const users = await prisma.user.findMany({})
  console.log(users)
  return (
    <EnhancedProfilePage
    // @ts-ignore
    JobDetails={user?.workExperiences}
    certificationData={mockCertificationData} 
  />
  // <div className="">guyvu</div>
  )
}
