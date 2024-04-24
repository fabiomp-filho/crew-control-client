import {AiFillHome} from "react-icons/ai";

export const itemsHorizontal = (user) => {

    const adminItems = [
        {
            key: "home",
            label: <AiFillHome/>,
            path: "/home",
            tooltip: "Home"
        },
        {
            key: "staff",
            label: "Membros",
            path: "/staff",
            tooltip: "Membros"
        },
        {
            key: "teams",
            label: "Equipes",
            path: "/teams",
            tooltip: "Equipes"
        },
    ];
    const leaderItems = [
        {
            key: "leader-home",
            label: <AiFillHome/>,
            path: "/home",
            tooltip: "Home"
        },
        {
            key: "leader-staff",
            label: "Membros",
            path: "/staff",
            tooltip: "Membros"
        },
        {
            key: "leader-teams",
            label: "Equipes",
            path: "/teams",
            tooltip: "Equipes"
        },
    ];
    const collaboratorItems = [
        {
            key: "home",
            label: <AiFillHome/>,
            path: "/home",
            tooltip: "Home"
        },
        {
            key: "staff",
            label: "Membros",
            path: "/staff",
            tooltip: "Membros"
        },
        {
            key: "teams",
            label: "Equipes",
            path: "/teams",
            tooltip: "Equipes"
        },
    ];


    if (user?.role === "Administrador") {
        return adminItems;
    }
    if (user?.role === "Líder") {
        return leaderItems;
    }
    if (user?.role === "Colaborador") {
        return collaboratorItems;
    }


    return [];

}
