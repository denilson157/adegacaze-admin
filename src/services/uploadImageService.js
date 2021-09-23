import { UploadCareEnum } from '../util/APIEnums'
import api from './api'

const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.uploadcare-v0.5+json',
    "Authorization": `Uploadcare.Simple ${UploadCareEnum.Public}:${UploadCareEnum.Secret}`
}

const uploadCareRoot = "https://api.uploadcare.com/";

export const upload_care_delete = imageUuid =>
    new Promise((resolve, reject) =>
        api(uploadCareRoot, header)
            .delete(`files/${imageUuid}/`)
            .then(resp => resolve(resp.data))
            .catch(error => reject(error))
    )
