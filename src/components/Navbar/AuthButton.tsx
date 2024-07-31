'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <Button disabled>Loading...</Button>;
  }

  if (session) {
    return (
      <>
        <span className="mr-2">Welcome, {session.user?.name}</span>
        <Button variant="outline" onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    );
  }

  return (
    <Button variant="outline" onClick={() => signIn('google')}>
      Sign In with Google
    </Button>
  );
};

export default AuthButton;