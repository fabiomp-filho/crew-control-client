import {IdcardOutlined, InfoCircleOutlined, LogoutOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";

export const userAreaItems = [
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
                        <IdcardOutlined />
                        <span> Usuário</span>
                    </>,
            },
            {
                key: '1-2',
                label:
                    <>
                        <MailOutlined/>
                        <span> E-mail</span>
                    </>,
            }
        ],
    },
    {
        key: '2',
        type: 'group',
        label:
            <>
                <SettingOutlined />
                <span> Configurações</span>
            </>,
        children: [
            {
                key: '2-1',
                label: 'Redefinir senha',
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