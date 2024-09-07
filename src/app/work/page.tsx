"use client"
import React, { useState, useEffect } from "react";
import WorkExperienceCard from "@/components/employee/WorkExperienceCard";
import Onboarding from "@/components/Onboarding";
import InitCredentialStore from "@/components/employee/InitCred";

export default function WorkPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simulating data fetch or checking for existing data
    // Replace this with actual data fetching logic
    const fetchData = async () => {
      // Simulated delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demonstration, we're setting userData to null
      // In a real app, you'd fetch this data from an API or local storage
      setUserData(null);
    };

    fetchData();
  }, []);

  const handleOnboardingSubmit = (data) => {
    // Handle the submitted data, e.g., save to backend or update state
    console.log("Onboarding data submitted:", data);
    setUserData(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      {userData ? (
        <>
          <WorkExperienceCard
            companyName="Acme Inc."
            jobTitle="Senior Software Engineer"
            jobDescription="Developed and maintained enterprise-level web applications."
            skills={['React', 'TypeScript', 'Node.js']}
            timeline="Jan 2020 - Present"
            isCompanyOnPlatform={false}
            verificationStatus="Pending"
            userEmail="user@example.com"
          />
          <InitCredentialStore />
        </>
      ) : (
        <Onboarding onSubmit={handleOnboardingSubmit} />
      )}
    </main>
  );
}