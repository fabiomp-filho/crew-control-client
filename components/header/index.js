import styles from "./header.module.scss";
import {useRouter} from "next/router";
import HorizontalMenu from "../Menu/HorizontalMenu";

const CustomHeader = () => {
    const router = useRouter();

    const goHome = () => {
        router.push("/home");
    }


    return (
        <>
            <div className={styles.containerLogo} onClick={goHome}>
                <img className={styles.headerLogo} src={"crew-icon-96.ico"} alt={"crew-icon"}/>
                <h3>CREW CONTROL</h3>
            </div>
            <HorizontalMenu />
        </>

    )
}
export default CustomHeader;