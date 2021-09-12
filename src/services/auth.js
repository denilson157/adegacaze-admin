import moment from 'moment'

const TOKEN_KEY = "@Caze-Token";
const EXPIRE_DATE = "@Caze-Expire"

const clearLocalStorage = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(EXPIRE_DATE)
}

export const isAuthenticated = () => {
    let token = localStorage.getItem(TOKEN_KEY)
    let date = localStorage.getItem(EXPIRE_DATE)

    if (token && date) {
        let dataAtual = moment().utc()
        let dataExpirar = moment(date)

        if (dataExpirar.isAfter(dataAtual))
            return true
    }

    clearLocalStorage()
    return false;
}

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const logout = () => clearLocalStorage()