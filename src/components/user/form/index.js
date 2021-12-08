import React, { useEffect, useState } from 'react'
import { useForm } from '../../../util/form';
import UserForm from './UserForm'
import { Grid, makeStyles, Container } from '@material-ui/core';
import Validate from '../../../util/validate'

import * as UserService from '../../../services/userService'
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
    name: '',
    email: '',
    birthday: '',
    cellphone: ''
}

const FormUser = ({ snackbarShowMessage }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false)

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, Validate.user)


    const handleSubmit = async e => {
        e.preventDefault()
        
        const erros = Validate.user(values, setErrors, errors)


        if (Validate.formIsValidate(erros)) {
            setLoading(true)
            UserService
                .user_save(values)
                .then(resp => {
                    setValues({
                        id: resp.resp.id,
                        name: resp.resp.name,
                        email: resp.resp.email,
                        birthday: resp.resp.birthday,
                        cellphone: resp.resp.cellphone

                    })

                    snackbarShowMessage(resp.message)
                })
                .catch(() => snackbarShowMessage("Erro ao salvar usuário", "error"))
                .finally(() => setLoading(false))

        } else
            setErrors(erros)

    }

    const params = useParams()

    const fillInitialValues = async () => {
        if (params.id) {
            setLoading(true)

            const user = await UserService.user_get(params.id)

            setValues({
                id: user.id,
                name: user.name,
                email: user.email,
                birthday: user.birthday,
                cellphone: user.cellphone
            })

            setLoading(false)
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
                <UserForm
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

export default withSnackbar(FormUser)