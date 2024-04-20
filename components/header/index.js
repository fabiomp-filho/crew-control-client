import styles from "./header.module.scss";
import {useRouter} from "next/router";
import HorizontalMenu from "../menu/HorizontalMenu";
import {itensHorizontal} from "../menu/itensHorizontal";

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
            <HorizontalMenu items={itensHorizontal} router={router}/>
        </>

    )
}
export default CustomHeader;