import React, { useEffect, useState } from 'react'
import { useForm } from '../../../util/form';
import Validate from '../../../util/validate'
import CategoryForm from './CategoryForm'
import { Grid, makeStyles, Container } from '@material-ui/core';

import * as CategoryService from '../../../services/categoryService'
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

const FormCategory = (props) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false)

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, Validate.category);

    const handleSubmit = async e => {
        e.preventDefault()

        const erros = Validate.category(values, setErrors, errors)


        if (Validate.formIsValidate(erros)) {
            setLoading(true)

            CategoryService
                .category_save(values)
                .then(resp => {
                    setValues({
                        id: resp.id,
                        name: resp.name
                    })

                    props.snackbarShowMessage("Salvo")
                })
                .finally(() => setLoading(false))

        } else
            setErrors(erros)

    }

    const params = useParams()

    const fillInitialValues = async () => {

        if (params.id) {
            const category = await CategoryService.category_get(params.id)

            setValues({
                id: category.id,
                name: category.name
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
                <CategoryForm
                    handleSubmit={handleSubmit}
                    values={values}
                    handleInputChange={handleInputChange}
                    errors={errors}
                    resetForm={resetForm}
                />
            </Container>
        </Grid>
    )
}

export default withSnackbar(FormCategory)