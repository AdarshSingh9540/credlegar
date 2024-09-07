import React from 'react';
import EnhancedProfilePage from '@/components/ProfilePage';
import { mockCertificationData, mockJourneyData } from '@/components/MockData';

const ProfilePageContainer = () => {
  return (
    <EnhancedProfilePage
      journeyData={mockJourneyData} 
      certificationData={mockCertificationData} 
    />
  );
};

export default ProfilePageContainer;