'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface WorkExperienceCardProps {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  skills: string[];
  timeline: string;
  isCompanyOnPlatform: boolean;
  verificationStatus: 'Verified' | 'Pending' | 'Not Verified';
  userEmail: string;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  companyName,
  jobTitle,
  jobDescription,
  skills,
  timeline,
  isCompanyOnPlatform,
  verificationStatus,
  userEmail,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [receiverEmail, setReceiverEmail] = useState('');
  const [requestMessage, setRequestMessage] = useState('');

  const handleVerificationAction = () => {
    if (isCompanyOnPlatform) {
      // Initiate verification process for companies on the platform
      console.log('Initiating verification process with company');
    } else {
      setIsDialogOpen(true);
    }
  };

  const handleSendVerificationRequest = () => {
    // Handle sending verification request email
    console.log('Sending verification request', { receiverEmail, requestMessage });
    setIsDialogOpen(false);
  };

  return (
    <>
    <Card className="w-full max-w-md mx-auto bg-gray-800 rounded-xl overflow-hidden border-primary text-white shadow-lg">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{companyName}</h2>
          <Badge 
            variant={verificationStatus === 'Verified' ? 'default' : 'secondary'}
            className={`${verificationStatus === 'Verified' ? 'bg-green-500' : 
                         verificationStatus === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'}`}
          >
            {verificationStatus}
          </Badge>
        </div>
        <h3 className="text-xl mb-2">{jobTitle}</h3>
        <p className="mb-4 text-gray-300">{jobDescription}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-700 px-2 py-1 rounded-md text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-400">Timeline: {timeline}</p>
      </CardContent>
      <CardFooter className="bg-gray-900 p-4">
        <Button onClick={handleVerificationAction} className="w-full">
          {isCompanyOnPlatform
            ? 'Request Work Experience Verification'
            : 'Request Verification from Your Organization'}
        </Button>
      </CardFooter>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>Request Work Experience Verification</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label htmlFor="sender-email" className="block text-sm font-medium mb-1">
                From:
              </label>
              <Input id="sender-email" value={userEmail} disabled className="bg-gray-700" />
            </div>
            <div>
              <label htmlFor="receiver-email" className="block text-sm font-medium mb-1">
                To:
              </label>
              <Input
                id="receiver-email"
                value={receiverEmail}
                onChange={(e) => setReceiverEmail(e.target.value)}
                placeholder="Enter HR or manager's email"
                className="bg-gray-700"
              />
            </div>
            <div>
              <label htmlFor="request-message" className="block text-sm font-medium mb-1">
                Verification Request Message:
              </label>
              <Textarea
                id="request-message"
                value={requestMessage}
                onChange={(e) => setRequestMessage(e.target.value)}
                placeholder="Please verify my work experience at your organization..."
                className="bg-gray-700"
                rows={4}
              />
            </div>
            <Button onClick={handleSendVerificationRequest} className="w-full">
              Send Verification Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
 
  );
};

export default WorkExperienceCard;
