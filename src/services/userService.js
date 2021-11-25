import api from './api'
import { APIEnum } from '../util/APIEnums'


export const user_list = () =>
    new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.User}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )



export const user_get = (id) =>
    new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.User}/${id}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )



export const user_login = (form) =>
    new Promise((resolve, reject) =>
        api()
            .post(`${APIEnum.Login}`, JSON.stringify(form))
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )



export const user_logout = () =>
    new Promise((resolve, reject) =>
        api()
            .post(`${APIEnum.Logout}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )
