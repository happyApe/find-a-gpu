import React from 'react';
import { Table } from '@/components/ui/table';
import Navbar from '@/components/Navbar';
import GPUTable from './GPUTable';

const FindMeGPUApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4">
        <GPUTable />
      </main>
    </div>
  );
};

export default FindMeGPUApp;