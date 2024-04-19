import styles from "./menu.module.scss";
import {Menu} from "antd";

const HorizontalMenu = () => {
    const items = new Array(3).fill(null).map((_, index) => ({
        key: index + 1,
        label: `Navegação ${index + 1}`,
    }));

    return (
        <Menu mode={"horizontal"}
              items={items}
              className={styles.menu}
        />
    )

}
export default HorizontalMenu;