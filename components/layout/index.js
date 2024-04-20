import React from "react";
import styles from "./layout.module.scss"
import {Layout} from "antd";
import CustomHeader from "../header";
import CustomFooter from "../footer";

const {Header, Content, Footer} = Layout;

const CustomLayout = ({children}) => {

    return (
        <Layout className={styles.layout}>
            <Header className={styles.headerContainer}>
                <CustomHeader />
            </Header>
            <Content>
                {children}
            </Content>
            <Footer className={styles.footerContainer}>
                <CustomFooter />
            </Footer>
        </Layout>
    )
}


export default CustomLayout;