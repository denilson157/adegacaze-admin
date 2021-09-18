import api from './api'
import { APIEnum } from '../util/APIEnums'

export const brand_list = () =>
    new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.Brand}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

export const brand_get = brandId =>
    new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.Brand}/${brandId}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )


export const brand_save = brand => {
    let apiSave = api().post(APIEnum.Brand, JSON.stringify(brand))

    if (brand.id)
        apiSave = api().put(`${APIEnum.Brand}/${brand?.id}`, JSON.stringify(brand))

    return new Promise((resolve, reject) =>
        apiSave
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )
}


export const brand_delete = brandId =>
    new Promise((resolve, reject) =>
        api()
            .delete(`${APIEnum.Brand}/${brandId}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

export const brand_restore = brandId =>
    new Promise((resolve, reject) =>
        api()
            .post(`${APIEnum.Brand}/restore/${brandId}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

export const brand_list_trash = () =>
    new Promise((resolve, reject) =>
        api()
            .post(`${APIEnum.Brand}/trash`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

