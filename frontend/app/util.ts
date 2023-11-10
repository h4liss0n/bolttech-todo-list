export const localStorageGetToken = () => {
    if (typeof window !== 'undefined') {
        if ('localStorage' in window) {
            return localStorage.getItem("token");
        }
    }
}




