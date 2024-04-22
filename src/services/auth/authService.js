import api from "@/services/api";

export const AuthService = {
    auth: (entity) => {
        return api.post('/auth/login', entity).then((response) => {
                return response.data;
            }
        )
    },
}