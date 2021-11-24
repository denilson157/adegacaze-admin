const category = (fValues, errors) => {

    let errorReturn = { ...errors }

    if (!fValues.name)
        errorReturn.name = "Nome obrigatóio"


    return errorReturn
}

const brand = (fValues, errors) => {

    let errorReturn = { ...errors }

    if (!fValues.name)
        errorReturn.name = "Nome obrigatóio"


    return errorReturn
}

const product = (fValues, errors) => {

    let errorReturn = { ...errors }

    if (!fValues.name)
        errorReturn.name = "Nome obrigatóio"
    if (!fValues.price)
        errorReturn.price = "Preço obrigatório"
    if (!fValues.brand_id)
        errorReturn.brand_id = "Marca obrigatória"
    if (!fValues.description)
        errorReturn.description = "Descrição Obrigatória"
    if (!fValues.img)
        errorReturn.img = "Imagem Obrigatória"

    return errorReturn
}


const order = (fValues, errors) => {

    let errorReturn = { ...errors }

    if (!fValues.status_id)
        errorReturn.status_id = "Status obrigatório"

    return errorReturn
}

const formIsValidate = (form) => form && Object.keys(form).length === 0 && form.constructor === Object

const Validate = {
    category,
    brand,
    product,
    order,
    formIsValidate
}



export default Validate