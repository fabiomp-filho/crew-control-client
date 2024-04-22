export const setUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
}

export const getUser = () => {
    if (typeof window !== 'undefined') {
        const user = sessionStorage.getItem("user")
        if (user !== null) {
            return JSON.parse(user)
        }
    }

}