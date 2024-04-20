import styles from "./home.module.scss"
import {Button, Form, message} from "antd";
import FormItems from "../../components/fields/FormItems";
import {fields} from "@/pages/fields";
import Link from "next/link";
import {useRouter} from "next/router";

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();
    const onFinish = (data) => {
        if (data.login === "teste" && data.password === "123456") {
            router.push("/home")

        } else {
            messageApi.error("Credenciais Inválidas")
        }
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
                        <Button htmlType={"submit"} type={"primary"} size={"large"} block>Entrar</Button>
                        <span>Copyright &copy; 2024.  Todos os direitos reservados. </span>
                    </div>
                </Form>
            </div>
        </main>

    );
}
export default Login;