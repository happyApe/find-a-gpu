import { antdTheme } from "~styles/antdTheme";
import { ConfigProvider } from "antd";

import 'antd/dist/reset.css';
import '~styles/globals.css';

import type { AppProps } from "next/app";
import { FC } from "react";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppLayout from "~src/components/AppLayout";
import { wrapper } from "~src/redux/store";

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const store: any = useStore();

	return <>
		<PersistGate persistor={store.__persistor}>
			{() => (
				<ConfigProvider theme={antdTheme}>
					<AppLayout Component={Component} pageProps={pageProps} />
				</ConfigProvider>
			)}
		</PersistGate>
	</>;
};

export default wrapper.withRedux(App);