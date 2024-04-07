// Copyright 2019-2025 @polka-labs/townhall authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { Layout } from 'antd';
import React, { FC } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import Sidebar from './Sidebar';
import NavHeader from './NavHeader';

const { Content } = Layout;

interface IAppLayoutProps {
	Component: NextComponentType<NextPageContext<any>, any, any>;
	pageProps: any;
}

const AppLayout: FC<IAppLayoutProps> = (props) => {
	const { Component, pageProps } = props;

	return (
        <Layout className='bg-app_background'>
            <Layout.Sider
                trigger={null}
                breakpoint={'lg'}
                collapsedWidth={0}
                className={'hidden lg:block min-w-[208px] bg-app_background border-0 border-r border-solid border-blue_primary'}
            >
                <Sidebar />
            </Layout.Sider>
            <Layout className='flex flex-col bg-app_background relative'>
                <NavHeader />
                <Layout
                    className='block md:px-5 md:py-5 bg-transparent'
                >
                    <Content className='rounded-xl bg-app_dark_background mx-3 md:mx-0 mb-3 md:mb-0 md:overflow-y-auto md:scroll-hidden md:h-full'>
                        <Component {...pageProps} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
	);
};

export default AppLayout;