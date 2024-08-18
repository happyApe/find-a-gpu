import React from 'react';
import Navbar from '@/components/Navbar';
import GPUTable from './GPUTable';

const FindMeGPUApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <GPUTable />
    </div>
  );
};

export default FindMeGPUApp;