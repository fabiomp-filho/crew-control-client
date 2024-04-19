import React from "react";
import {AiOutlineLock, AiOutlineUser} from "react-icons/ai";

export const fields = [
    {
        type: "text",
        label: "Login",
        name: "login",
        required: true,
        size: "large",
        noRequiredMark: true,
        col: 24,
        prefix: <AiOutlineUser />,
        placeholder: "Entre com o login"
    },
    {
        type: "password",
        label: "Senha",
        name: "password",
        required: true,
        noRequiredMark: true,
        size: "large",
        col: 24,
        prefix: <AiOutlineLock />,
        placeholder: "Entre com a sua senha"
    }
]