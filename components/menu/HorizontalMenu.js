import styles from "./menu.module.scss";
import Link from "next/link";

const HorizontalMenu = ({items = [], router}) => {

    const isRouteActive = (route) => {
        return router.pathname === route;
    };

    return (
        <div className={styles.containerList}>
            {items.map((item) => {
                return (
                    <Link
                        className={isRouteActive(`/${item.key}`) ? styles.itemActive : styles.itemList}
                        key={item.key}
                        href={`/${item.key}`}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </div>
    )

}
export default HorizontalMenu;

