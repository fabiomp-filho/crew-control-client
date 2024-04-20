import {GithubFilled, LinkedinFilled, MailOutlined,} from "@ant-design/icons";
import styles from "./footer.module.scss"

const CustomFooter = () => {

    return (
        <>
            <div className={styles.footer}>
                Copyright &copy; Designed by <span className={styles.name}>Fábio Martins</span>
                <div className={styles.icons}>
                    <MailOutlined className={styles.iconMail} title={"E-mail para contato"}/>
                    <GithubFilled className={styles.iconGithub} title={"Github"}/>
                    <LinkedinFilled className={styles.iconLinkedin} title={"Linkedin"}/>
                </div>
            </div>
        </>
    )
}
export default CustomFooter;