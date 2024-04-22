import {IdcardOutlined, InfoCircleOutlined, LogoutOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";

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
}