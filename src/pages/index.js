import styles from "./home.module.scss"
import {Button, Form, message} from "antd";
import FormItems from "../../components/fields/FormItems";
import {fields} from "@/pages/fields";
import Link from "next/link";
import {useRouter} from "next/router";
import {AuthService} from "@/services/auth/authService";
import {useState} from "react";
import {setToken} from "@/utils/tokenUtils";
import {setUser} from "@/utils/userUtils";

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const onFinish = (data) => {
        setLoading(true);
        AuthService.auth(data).then(response => {
            messageApi.success("Tudo certo!").then(() => {
                setToken(response.token);
                setUser(response.user);
                router.push("/home");
                setLoading(false);
            });

        }).catch(err => {
            messageApi.error(err.response.data)
            setLoading(false);
        })
    }

    return (

        <main className={styles.container}>
            {contextHolder}
            <div className={styles.formContainer}>
                <div>
                    <img src={"/side-image-login.jpg"}
                         alt={"image-login"}
                         className={styles.imgLogin}
                    />
                </div>
                <Form
                    onFinish={onFinish}
                    className={styles.form}
                    name={"form-login"}
                    layout={"vertical"}
                    autoComplete={"off"}
                >
                    <div className={styles.formTitle}>
                        <h1>Crew Control</h1>
                    </div>
                    <FormItems fields={fields}/>
                    <div className={styles.formFooter}>
                        <Link href={""}>Esqueceu sua senha ?</Link>
                        <Button loading={loading} htmlType={"submit"} type={"primary"} size={"large"}
                                block>Entrar</Button>
                        <span>Copyright &copy; 2024.  Todos os direitos reservados. </span>
                    </div>
                </Form>
            </div>
        </main>

    );
}
export default Login;