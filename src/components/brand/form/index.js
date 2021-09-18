import React, { useEffect, useState } from 'react'
import { useForm } from '../../../util/form';
import Validate from '../../../util/validate'
import BrandForm from './BrandForm'
import { Grid, makeStyles, Container } from '@material-ui/core';

import * as BrandService from '../../../services/brandService'
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

const FormBrand = ({ snackbarShowMessage }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false)

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, Validate.brand);

    const handleSubmit = async e => {
        e.preventDefault()

        const erros = Validate.brand(values, setErrors, errors)


        if (Validate.formIsValidate(erros)) {
            setLoading(true)

            BrandService
                .brand_save(values)
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
            const brand = await BrandService.brand_get(params.id)

            setValues({
                id: brand.id,
                name: brand.name
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
                <BrandForm
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

export default withSnackbar(FormBrand)