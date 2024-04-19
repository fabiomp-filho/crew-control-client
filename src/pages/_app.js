import React from 'react';
import "@/styles/globals.scss";
import ptBR from "antd/locale/pt_BR"
import theme from "../../components/theme/themeConfig";
import {ConfigProvider} from "antd";
import Head from 'next/head'
import CustomLayout from "../../components/layout";

export default function App({Component, pageProps}) {

    const loginPage = Component.name === "Login";

    return (
        <ConfigProvider theme={theme} locale={ptBR}>
            <Head>
                <title>Crew Control</title>
            </Head>
            {loginPage ?
                <Component {...pageProps} />
                :
                <CustomLayout>
                    <Component {...pageProps} />
                </CustomLayout>
            }
        </ConfigProvider>
    )
}
