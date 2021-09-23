import api from './api'
import { APIEnum } from '../util/APIEnums'

export const product_list = () =>
    new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.Product}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

export const product_get = productId =>
    new Promise((resolve, reject) =>
        api()
            .get(`${APIEnum.Product}/${productId}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )


export const product_save = product => {

    product.img64 = product.file64

    let apiSave = api().post(APIEnum.Product, JSON.stringify(product))

    if (product.id)
        apiSave = api().put(`${APIEnum.Product}/${product?.id}`, JSON.stringify(product))

    return new Promise((resolve, reject) =>
        apiSave
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )
}


export const product_delete = productId =>
    new Promise((resolve, reject) =>
        api()
            .delete(`${APIEnum.Product}/${productId}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

export const product_restore = productId =>
    new Promise((resolve, reject) =>
        api()
            .post(`${APIEnum.Product}/restore/${productId}`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

export const product_list_trash = () =>
    new Promise((resolve, reject) =>
        api()
            .post(`${APIEnum.Product}/trash`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )

