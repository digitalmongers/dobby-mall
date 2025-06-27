'use client';
import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';
import StudentDashboard from './StudentDashboard';
import Studentshop from './Studentshop';
import StudentEarnings from './StudentEarnings';
import StudentPayouts from './StudentPayouts';
import StudentRegistration from './StudentRegistration';
import StudentRegistrationStep2 from './StudentRegistrationStep2';

const StudentPanel = () => {
  return (
    <div>
      <StudentSidebar/>
      <div className='w-[82%] ml-64 -mt-174 '><StudentDashboard/></div>
      <Studentshop/>
      <StudentEarnings/>
      <StudentPayouts/>
      <StudentRegistration onClose={() => {}}/>
      <StudentRegistrationStep2/>
    </div>
  );
};

export default StudentPanel;