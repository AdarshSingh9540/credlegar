import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  BriefcaseIcon,
  GraduationCapIcon,
  AwardIcon,
  ShieldCheck,
  XCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

const Badge = ({ status }) => {
  const badgeConfig = {
    verified: {
      icon: CheckCircle,
      text: "Verified",
      className: "bg-green-100 text-green-800",
    },
    unverified: {
      icon: XCircle,
      text: "Unverified",
      className: "bg-red-100 text-red-800",
    },
    pending: {
      icon: Clock,
      text: "Pending",
      className: "bg-yellow-100 text-yellow-800",
    },
  };

  const { icon: Icon, text, className } = badgeConfig[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    >
      <Icon className="w-4 h-4 mr-1" />
      {text}
    </span>
  );
};

const EnhancedProfilePage = () => {
  const data = [
    {
      title: "2024",
      icon: <BriefcaseIcon className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            Software Engineer at TechCorp
          </h3>
          <Badge status="verified" />
          <p className="text-gray-400 text-sm mb-4">January 2024 - Present</p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Led the development of a new customer-facing dashboard
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Improved application performance by 30% through code optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Mentored junior developers in best practices and coding standards
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023",
      icon: <BriefcaseIcon className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-teal-300">
              Junior Developer at StartupX
            </h3>
            <Badge status="pending" />
            <p className="text-gray-400 text-sm mb-4">
              March 2023 - December 2023
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                Contributed to the development of a mobile app using React
                Native
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                Participated in daily stand-ups and sprint planning meetings
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                Assisted in debugging and resolving customer-reported issues
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-teal-300">
              Intern at CodeCrafters
            </h3>
            <Badge status="unverified" />
            <p className="text-gray-400 text-sm mb-4">
              January 2023 - March 2023
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                Learned and applied agile development methodologies
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                Assisted in the creation of unit tests for existing codebase
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2">•</span>
                Participated in code reviews and improved coding skills
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      icon: <GraduationCapIcon className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            Computer Science Student
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            September 2022 - December 2022
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Completed coursework in data structures and algorithms
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Participated in hackathons and coding competitions
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Developed a personal portfolio website using React and Next.js
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2021",
      icon: <AwardIcon className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            Hackathon Winner
          </h3>
          <Badge status="verified" />
          <p className="text-gray-400 text-sm mb-4">November 2021</p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Won first place at XYZ Hackathon with a team of 4
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Developed a blockchain-based voting system prototype
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Presented the project to a panel of industry experts
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2020",
      icon: <GraduationCapIcon className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            High School Graduate
          </h3>
          <p className="text-gray-400 text-sm mb-4">May 2020</p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Graduated with honors in Computer Science
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Active member of the computer club
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Participated in various coding competitions and science fairs
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2019",
      icon: <AwardIcon className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            Coding Competition Winner
          </h3>
          <Badge status="verified" />
          <p className="text-gray-400 text-sm mb-4">October 2019</p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Secured first place in the inter-school coding competition
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Built a web application using HTML, CSS, and JavaScript
            </li>
            <li className="flex items-start">
              <span className="text-teal-400 mr-2">•</span>
              Received a scholarship for outstanding performance
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const certifications = [
    {
      title: "React Developer Certification",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />, // Using Certificate icon from lucide-react
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            React Developer Certification
          </h3>
          <Badge status="verified" />
          <p className="text-gray-400 text-sm mb-4">
            January 2024 - February 2024
          </p>
          <p className="text-gray-300">Certification ID: 123456789</p>
        </div>
      ),
    },
    {
      title: "Full-Stack Developer Certification",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            Full-Stack Developer Certification
          </h3>
          <Badge status="verified" />
          <p className="text-gray-400 text-sm mb-4">March 2024 - April 2024</p>
          <p className="text-gray-300">Certification ID: 987654321</p>
        </div>
      ),
    },
    {
      title: "Cloud Computing Certification",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            Cloud Computing Certification
          </h3>
          <Badge status="verified" />
          <p className="text-gray-400 text-sm mb-4">May 2024 - June 2024</p>
          <p className="text-gray-300">Certification ID: 1122334455</p>
        </div>
      ),
    },
    {
      title: "DevOps Certification",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            DevOps Certification
          </h3>
          <Badge status="verified" />
          <p className="text-gray-400 text-sm mb-4">July 2024 - August 2024</p>
          <p className="text-gray-300">Certification ID: 5566778899</p>
        </div>
      ),
    },
    {
      title: "Data Science Certification",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      content: (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-teal-300">
            Data Science Certification
          </h3>
          <Badge status="verified" />
          <p className="text-gray-400 text-sm mb-4">
            September 2024 - October 2024
          </p>
          <p className="text-gray-300">Certification ID: 6677889900</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            My Professional Journey
          </h2>
          <Timeline data={data} />
          <h2 className="text-3xl font-bold text-center my-8">
            Certifications
          </h2>
          <Timeline data={certifications} />
        </div>
      </main>
    </div>
  );
};

export default EnhancedProfilePage;
