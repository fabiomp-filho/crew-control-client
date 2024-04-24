import styles from "./header.module.scss";
import {useRouter} from "next/router";
import HorizontalMenu from "../menu/HorizontalMenu";
import {itemsHorizontal} from "../menu/itemsHorizontal";
import UserArea from "../userArea/UserArea";
import {userAreaItems} from "../userArea/items";
import {getUser} from "@/utils/userUtils";
import {useEffect, useState} from "react";
import Image from "next/image";
import {Tooltip} from "antd";
import {Colors} from "../theme/colors";


const CustomHeader = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const goHome = () => {
        router.push("/home");
    }
    useEffect(() => {
        if (!user) {
            setUser(getUser())
        }
    }, [user])


    return (
        <>
            <Tooltip title={"Crew Control"} color={Colors.hoverAltBlack}>
                <div className={styles.containerLogo} onClick={goHome}>

                    <Image src={"/crew-icon-black-96.ico"} alt={"crew-icon"} width={30} height={30}/>
                    <h3>CREW CONTROL</h3>
                </div>
            </Tooltip>
            <HorizontalMenu items={itemsHorizontal(user)} router={router}/>
            <UserArea router={router} items={userAreaItems(user)}/>
        </>

    )
}
export default CustomHeader;