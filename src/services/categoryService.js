import api from './api'
import { APIEnum } from '../util/APIEnums'

export const category_list = () =>
    new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.Category}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

export const category_get = categoryId =>
    new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.Category}/${categoryId}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )


export const category_save = category => {
    let apiSave = api().post(APIEnum.Category, JSON.stringify(category))

    if (category.id)
        apiSave = api().put(`${APIEnum.Category}/${category?.id}`, JSON.stringify(category))

    return new Promise((resolve, reject) =>
        apiSave
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )
}


export const category_delete = categoryId =>
    new Promise((resolve, reject) =>
        api()
            .delete(`${APIEnum.Category}/${categoryId}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

export const category_restore = categoryId =>
    new Promise((resolve, reject) =>
        api()
            .post(`${APIEnum.Category}/restore/${categoryId}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

