import styles from "./menu.module.scss";
import Link from "next/link";
import {Colors} from "../theme/colors";
import {Tooltip} from "antd";

const HorizontalMenu = ({items = [], router}) => {

    const isRouteActive = (route) => {
        return router.pathname === route;
    };

    return (
        <div className={styles.containerList}>
            {items.map((item) => {
                return (
                    <Tooltip title={`Navegar para ${item.tooltip}`} color={Colors.hoverAltBlack}>
                        <Link
                            className={isRouteActive(item.path) ? styles.itemActive : styles.itemList}
                            key={item.key}
                            href={item.path}
                        >
                            {item.label}
                        </Link>
                    </Tooltip>
                )
            })}
        </div>
    )

}
export default HorizontalMenu;

