import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { BriefcaseIcon, GraduationCapIcon, AwardIcon, ShieldCheck, XCircle, CheckCircle, Clock } from 'lucide-react';

type BadgeStatus = 'verified' | 'unverified' | 'pending';

type BadgeProps = {
  status: BadgeStatus;
};


type Status = 'PENDING'|'APPROVED'|'REJECTED'
type JobDetails = {
  id: number;
  startDate: string; // Use Date if working directly with Date objects
  endDate: string;   // Use Date if working directly with Date objects
  company: string;
  jobTitle: string;
  jobDescription: string;
  status:Status;
  skills: string[];
  transactionId: string;
  userId: number;
};

type CertificationItem = {
  title: string;
  iconName: string;
  status: BadgeStatus;
  date: string;
  certificationId: string;
};

type EnhancedProfilePageProps = {
  JobDetails: JobDetails[];
  certificationData: CertificationItem[];
};

const Badge: React.FC<BadgeProps> = ({ status }) => {
  const badgeConfig = {
    verified: {
      icon: CheckCircle,
      text: 'Verified',
      className: 'bg-green-100 text-green-800'
    },
    unverified: {
      icon: XCircle,
      text: 'Unverified',
      className: 'bg-red-100 text-red-800'
    },
    pending: {
      icon: Clock,
      text: 'Pending',
      className: 'bg-yellow-100 text-yellow-800'
    }
  };

  const { icon: Icon, text, className } = badgeConfig[status];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      <Icon className="w-4 h-4 mr-1" />
      {text}
    </span>
  );
};

const EnhancedProfilePage: React.FC<EnhancedProfilePageProps> = ({ JobDetails, certificationData }) => {
  const getIcon = (iconName: string) => {
    const icons = {
      BriefcaseIcon,
      GraduationCapIcon,
      AwardIcon,
      ShieldCheck
    };
    const Icon = icons[iconName as keyof typeof icons];
    return Icon ? <Icon className="w-6 h-6 text-teal-400" /> : null;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Professional Journey</h2>
          <Timeline
           // @ts-ignore
          data={JobDetails.map(job => ({
            ...job,
            icon: getIcon('BriefcaseIcon'),
            content: (
            
              <div className="job-card bg-gray-800 text-white p-4 rounded-md shadow-md mb-4">
                
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{job.jobTitle} at {job.company}</h2>
        <span className={`status-badge bg-${job.status === 'APPROVED' ? 'green' : job.status === 'PENDING' ? 'yellow' : 'red'}-500 text-white py-1 px-2 rounded-full text-xs`}>
          {job.status === 'APPROVED' ? 'Approved' : job.status === 'PENDING' ? 'Pending' : 'Rejected'}
        </span>
      </div>
      <p className="text-sm mb-2">{new Date(job.startDate).toLocaleString('default', { month: 'long', year: 'numeric' })} - {new Date(job.endDate).toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
      <ul className="list-disc list-inside mb-4">
        {job.skills.map((skill, index) => (
          <li key={index} className="text-sm">{skill}</li>
        ))}
      </ul>
      <p className="text-sm">{job.jobDescription}</p>
    </div>
            )
          }))} />
          <h2 className="text-3xl font-bold text-center my-8">Certifications</h2>
          <Timeline data={certificationData.map(item => ({
            ...item,
            icon: getIcon(item.iconName),
            content: (
              <div key={item.title} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-teal-300">{item.title}</h3>
                <Badge status={item.status} />
                <p className="text-gray-400 text-sm mb-4">{item.date}</p>
                <p className="text-gray-300">Certification ID: {item.certificationId}</p>
              </div>
            )
          }))} />
        </div>
      </main>
    </div>
  );
};

export default EnhancedProfilePage;