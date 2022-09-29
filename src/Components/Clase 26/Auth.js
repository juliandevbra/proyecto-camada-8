export const Auth = () => {
    const isLogged = localStorage.getItem('logged')
    if(isLogged) return true
    else return false
}