import api from './api'
import { APIEnum } from '../util/APIEnums'

export const order_list = () => {
    return new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.Order}/list`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )
}

export const order_get = (id) => {
    return new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.Order}/${id}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )
}

export const order_save = order => {
    let apiSave = api().put(`${APIEnum.Order}/${order?.id}`, JSON.stringify(order))

    return new Promise((resolve, reject) =>
        apiSave
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )
}
