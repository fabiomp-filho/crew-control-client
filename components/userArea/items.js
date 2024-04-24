import {
    IdcardOutlined,
    InfoCircleOutlined,
    LockOutlined,
    LogoutOutlined,
    MailOutlined,
    SettingOutlined,
    SolutionOutlined,
} from "@ant-design/icons";

export const userAreaItems = (user) => {

    return [
        {
            key: '1',
            type: 'group',
            label:
                <>
                    <InfoCircleOutlined/>
                    <span> Informações</span>
                </>,
            children: [
                {
                    key: '1-1',
                    label:
                        <>
                            <IdcardOutlined/>
                            <span> {user?.firstName} {user?.lastName}</span>
                        </>,
                },
                {
                    key: '1-2',
                    label:
                        <>
                            <MailOutlined/>
                            <span> {user?.email}</span>
                        </>,
                },
                {
                    key: '1-3',
                    label:
                        <>
                            <SolutionOutlined/>
                            <span> {user?.role}</span>
                        </>,
                }
            ],
        },
        {
            key: '2',
            type: 'group',
            label:
                <>
                    <SettingOutlined/>
                    <span> Configurações</span>
                </>,
            children: [
                {
                    key: 'redefinir-senha',
                    label:
                        <>
                            <LockOutlined/>
                            <span> Redefinir Senha</span>
                        </>,
                },
            ],
        },
        {
            key: 'sair',
            label:
                <>
                    <LogoutOutlined/>
                    <span> Sair</span>
                </>,
        }
    ];
}