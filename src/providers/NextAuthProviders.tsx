'use client';

import React, { FC, PropsWithChildren } from 'react'
import { SessionProvider } from "next-auth/react";

const NextAuthProviders: FC<PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default NextAuthProviders