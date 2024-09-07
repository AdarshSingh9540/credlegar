import React from 'react';
import {Sidebar} from '@/components/SideBar'; // Update the import path according to your project structure
import WorkExperienceCard from '@/components/employee/WorkExperienceCard';
import Actions from '@/components/employee/Actions';

export default function Page() {
  return (
    <main className="flex min-h-screen ">
      {/* Sidebar */}
     <div className='w-[250px] border-r-4 border-gray-700'>
     <Sidebar/> 
     </div>
      
      {/* Main content */}
      <div className="flex-1 p-10 ">
        <Actions />
         <div className='flex flex-col-2'>
           
           <div className='opacity-50 mx-[5rem]'>
            
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
           </div>

            <div>
            <WorkExperienceCard
          companyName="Acme Inc."
          jobTitle="Senior Software Engineer"
          jobDescription="Developed and maintained enterprise-level web applications."
          skills={['React', 'TypeScript', 'Node.js']}
          timeline="Jan 2020 - Present"
          isCompanyOnPlatform={false}
          verificationStatus="Verified"
          userEmail="user@example.com"
        />
            </div>
         </div>
      </div>
    </main>
  );
}
