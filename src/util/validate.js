const category = (fValues, errors) => {

    let errorReturn = { ...errors }

    if (!fValues.name)
        errorReturn.name = "This field is required."


    return errorReturn
}

const formIsValidate = (form) => form && Object.keys(form).length === 0 && form.constructor === Object

const Validate = {
    category,
    formIsValidate
}



export default Validate