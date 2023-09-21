export function AuthHeader() {
    const getToken = localStorage.getItem('token')
    if (getToken) {
        return { 'Authorization': 'Bearer ' + getToken };
    } else {
        return {};
    }
}