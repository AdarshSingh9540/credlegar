import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { BriefcaseIcon, GraduationCapIcon, AwardIcon, ShieldCheck, XCircle, CheckCircle, Clock } from 'lucide-react';

type BadgeStatus = 'verified' | 'unverified' | 'pending';

type BadgeProps = {
  status: BadgeStatus;
};

type JourneyItem = {
  title: string;
  iconName: string;
  content: {
    title: string;
    status?: BadgeStatus;
    date: string;
    details?: string[];
  }[];
};

type CertificationItem = {
  title: string;
  iconName: string;
  status: BadgeStatus;
  date: string;
  certificationId: string;
};

type EnhancedProfilePageProps = {
  journeyData: JourneyItem[];
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

const EnhancedProfilePage: React.FC<EnhancedProfilePageProps> = ({ journeyData, certificationData }) => {
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
          <Timeline data={journeyData.map(item => ({
            ...item,
            icon: getIcon(item.iconName),
            content: (
              <div key={item.title} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                {item.content.map((contentItem, contentIndex) => (
                  <div key={contentIndex}>
                    <h3 className="text-xl font-semibold mb-2 text-teal-300">{contentItem.title}</h3>
                    {contentItem.status && <Badge status={contentItem.status} />}
                    <p className="text-gray-400 text-sm mb-4">{contentItem.date}</p>
                    {contentItem.details && contentItem.details.length > 0 && (
                      <ul className="space-y-2 text-gray-300">
                        {contentItem.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <span className="text-teal-400 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
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