import React from "react";
import styles from "./layout.module.scss"
import {Layout} from "antd";
import CustomHeader from "../header";

const {Header, Content, Footer} = Layout;

const CustomLayout = ({children}) => {

    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <CustomHeader />
            </Header>
            <Content>
                {children}
            </Content>
            <Footer>
            </Footer>
        </Layout>
    )
}


export default CustomLayout;