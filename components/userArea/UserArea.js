import {Dropdown, Space} from "antd";
import {TeamOutlined} from "@ant-design/icons";
import styles from "./userArea.module.scss"

const UserArea = ({router, items}) => {
    const onClick = ({key}) => {
        if (key === "sair") {
            router.push("/")
            return
        }
        if (key === "redefinir-senha") {
            router.push("/redefinir-senha")
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
                <TeamOutlined/>Área do Usuário
            </Space>

        </Dropdown>
    )
}

export default UserArea;