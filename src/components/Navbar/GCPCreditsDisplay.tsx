'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

const GCPCreditsDisplay = () => {
  const [credits, setCredits] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const fetchCredits = async () => {
    if (!session) return;
    setLoading(true);
    try {
      const response = await fetch('/api/gcp-credits');
      const data = await response.json();
      setCredits(data.credits);
    } catch (error) {
      console.error('Error fetching GCP credits:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session) {
      fetchCredits();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (!session) {
    return null;
  }

  return (
    <div className="flex items-center">
      <Button 
        onClick={fetchCredits} 
        disabled={loading}
        className="mr-2"
      >
        {loading ? 'Loading...' : 'Refresh Credits'}
      </Button>
      <span>GCP Credits: {credits !== null ? `$${credits.toFixed(2)}` : 'N/A'}</span>
    </div>
  );
};

export default GCPCreditsDisplay;