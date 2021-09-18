import React, { useEffect, useState } from 'react'
import { useForm } from '../../../util/form';
import Validate from '../../../util/validate'
import ProductForm from './ProductForm'
import { Grid, makeStyles, Container } from '@material-ui/core';

import * as ProductService from '../../../services/productService'
import { useParams } from 'react-router';
import { withSnackbar } from '../../snackbar'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const initialFValues = {
    id: 0,
    name: ''
}

const FormProduct = ({ snackbarShowMessage }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false)

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, Validate.product);

    const handleSubmit = async e => {
        e.preventDefault()

        const erros = Validate.product(values, setErrors, errors)


        if (Validate.formIsValidate(erros)) {
            setLoading(true)

            ProductService
                .product_save(values)
                .then(resp => {

                    setValues({
                        id: resp.resp.id,
                        name: resp.resp.name
                    })

                    snackbarShowMessage(resp.message)
                })
                .finally(() => setLoading(false))

        } else
            setErrors(erros)

    }

    const params = useParams()

    const fillInitialValues = async () => {

        if (params.id) {
            const product = await ProductService.product_get(params.id)

            setValues({
                id: product.id,
                name: product.name
            })
        }
        else
            setValues(initialFValues)

    }

    useEffect(() => {

        fillInitialValues()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Grid item xs={12}>
            <Container className={classes.container}>
                <ProductForm
                    handleSubmit={handleSubmit}
                    values={values}
                    handleInputChange={handleInputChange}
                    errors={errors}
                    resetForm={resetForm}
                    loading={loading}
                />
            </Container>
        </Grid>
    )
}

export default withSnackbar(FormProduct)