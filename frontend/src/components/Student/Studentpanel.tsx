'use client';
import React, { useState } from 'react';
import StudentSidebar from './StudentSidebar';
import StudentDashboard from './StudentDashboard';
import Studentshop from './Studentshop';
import StudentEarnings from './StudentEarnings';
import StudentPayouts from './StudentPayouts';


const StudentPanel = () => {
  return (
    <div>
      <StudentSidebar/>
      <div className='w-[82%] ml-64 -mt-174 '><StudentDashboard/></div>
      <Studentshop/>
      <StudentEarnings/>
      <StudentPayouts/>
      
    
    </div>
  );
};

export default StudentPanel;