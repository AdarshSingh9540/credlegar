"use client";
import React, { useState, useEffect } from "react";
import WorkExperienceCard from "@/components/employee/WorkExperienceCard";
import Onboarding from "@/components/Onboarding";
import InitCredentialStore from "@/components/employee/InitCred";

import { Sidebar } from "@/components/SideBar";
import { getUserFromDb } from "@/e.actions";
import { useUser } from "../ClientLayout";

export default function WorkPage() {
  const [userData, setUserData] = useState(false);
  const user = useUser();
  console.log(user);
  useEffect(() => {
    // Simulating data fetch or checking for existing data
    // Replace this with actual data fetching logic
    const fetchData = async () => {
      // Simulated delay
      const bool = await getUserFromDb(user?.email!);

      console.log(bool);
      if (await getUserFromDb(user?.email!)) {
        setUserData(true);
      }
    };

    fetchData();
  }, [userData]);

  const handleOnboardingSubmit = (data: any) => {
    // Handle the submitted data, e.g., save to backend or update state
    console.log("Onboarding data submitted:", data);
    setUserData(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="w-[250px] border-r-4 border-gray-700">
        <Sidebar user={user} />
      </div>

      {userData ? (
        <>
          <div className="flex flex-col-2">
            <div className="opacity-50 mx-[5rem]">
              <WorkExperienceCard
                companyName="Acme Inc."
                jobTitle="Senior Software Engineer"
                jobDescription="Developed and maintained enterprise-level web applications."
                skills={["React", "TypeScript", "Node.js"]}
                timeline="Jan 2020 - Present"
                isCompanyOnPlatform={false}
                verificationStatus="Pending"
                userEmail="user@example.com"
              />
            </div>

            <div>
              <WorkExperienceCard
                companyName="Acme Inc."
                jobTitle="Senior Software Engineer"
                jobDescription="Developed and maintained enterprise-level web applications."
                skills={["React", "TypeScript", "Node.js"]}
                timeline="Jan 2020 - Present"
                isCompanyOnPlatform={false}
                verificationStatus="Verified"
                userEmail="user@example.com"
              />
            </div>
          </div>

          <InitCredentialStore />
        </>
      ) : (
        <Onboarding onSubmit={handleOnboardingSubmit} />
      )}
    </main>
  );
}
