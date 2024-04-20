import styles from "./header.module.scss";
import {useRouter} from "next/router";
import HorizontalMenu from "../menu/HorizontalMenu";
import {itemsHorizontal} from "../menu/itemsHorizontal";
import UserArea from "../userArea/UserArea";
import {userAreaItems} from "../userArea/items";

const CustomHeader = () => {
    const router = useRouter();

    const goHome = () => {
        router.push("/home");
    }


    return (
        <>
            <div className={styles.containerLogo} onClick={goHome}>
                <img className={styles.headerLogo} src={"crew-icon-black-96.ico"} alt={"crew-icon"}/>
                <h3>CREW CONTROL</h3>
            </div>
            <HorizontalMenu items={itemsHorizontal} router={router}/>
            <UserArea router={router} items={userAreaItems}/>
        </>

    )
}
export default CustomHeader;