import WorkExperienceCard from "@/components/employee/WorkExperienceCard";
import Actions from "@/components/employee/Actions";


export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Actions/>
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
    </main>
  )
}
