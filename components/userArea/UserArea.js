import {Dropdown, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";
import styles from "./userArea.module.scss"

const UserArea = ({router, items}) => {
    const onClick = ({key}) => {
        if (key === "sair") {
            router.push("/")
        }
    }

    return (
        <Dropdown
            arrow={true}
            menu={{
                items,
                onClick,
            }}
            trigger={"click"}
        >

            <Space className={styles.dropdownToggle}>
                <UserOutlined/>Área do Usuário
            </Space>

        </Dropdown>
    )
}

export default UserArea;