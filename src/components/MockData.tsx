// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
// Mock data for professional journey
const mockJourneyData: JourneyItem[] = [
  {
    title: "2024",
    iconName: "BriefcaseIcon",
    content: [
      {
        title: "Software Engineer at TechCorp",
        status: "verified",
        date: "January 2024 - Present",
        details: [
          "Led the development of a new customer-facing dashboard",
          "Improved application performance by 30% through code optimization",
          "Mentored junior developers in best practices and coding standards"
        ]
      }
    ]
  },
  {
    title: "2023",
    iconName: "BriefcaseIcon",
    content: [
      {
        title: "Junior Developer at StartupX",
        status: "pending",
        date: "March 2023 - December 2023",
        details: [
          "Contributed to the development of a mobile app using React Native",
          "Participated in daily stand-ups and sprint planning meetings",
          "Assisted in debugging and resolving customer-reported issues"
        ]
      },
      {
        title: "Intern at CodeCrafters",
        status: "unverified",
        date: "January 2023 - March 2023",
        details: [
          "Learned and applied agile development methodologies",
          "Assisted in the creation of unit tests for existing codebase",
          "Participated in code reviews and improved coding skills"
        ]
      }
    ]
  },
  // ... other journey items
];

// Mock data for certifications
const mockCertificationData: CertificationItem[] = [
  {
    title: "React Developer Certification",
    iconName: "ShieldCheck",
    status: "verified",
    date: "January 2024 - February 2024",
    certificationId: "123456789"
  },
  {
    title: "Full-Stack Developer Certification",
    iconName: "ShieldCheck",
    status: "verified",
    date: "March 2024 - April 2024",
    certificationId: "987654321"
  },
  // ... other certification items
];

export { mockJourneyData, mockCertificationData };