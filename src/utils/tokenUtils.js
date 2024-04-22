export const setToken = (token) => {
    sessionStorage.setItem("token", token);
}
export const getToken = () => {
    const token = sessionStorage.getItem("token");

    if (token !== null) {
        return token
    }

}