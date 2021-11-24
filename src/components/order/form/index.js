import React, { useEffect, useState } from 'react'
import { useForm } from '../../../util/form';
import OrderForm from './OrderForm'
import { Grid, makeStyles, Container } from '@material-ui/core';
import Validate from '../../../util/validate'

import * as OrderService from '../../../services/orderService'
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
    street: '',
    number: '',
    complete: '',
    created_at: '',
    date_finish: '',
    total: '',
    payment_type: '',
    status_id: "0",
    observation: ''
}

const FormOrder = ({ snackbarShowMessage }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false)

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, Validate.order)

    const handleSubmit = async e => {
        e.preventDefault()

        const erros = Validate.brand(values, setErrors, errors)


        if (Validate.formIsValidate(erros)) {
            setLoading(true)

            OrderService
                .order_save({
                    id: values.id,
                    status_id: values.status_id
                })
                .then(resp => {

                    let valuesResp = {
                        ...values,
                        status_id: resp.resp.status_id,
                        date_finish: resp.resp.date_finish
                    }

                    setValues(valuesResp)

                    snackbarShowMessage(resp.message)
                })
                .finally(() => setLoading(false))


        } else
            setErrors(erros)

    }

    const params = useParams()

    const fillInitialValues = async () => {

        if (params.id) {
            const order = await OrderService.order_get(params.id)

            setValues({
                id: order.id,
                name: order.adress?.name,
                street: order.adress?.street,
                number: order.adress?.number,
                complete: order.adress?.complete,
                created_at: order.created_at,
                total: order.products.map(x => parseFloat(x.pivot.price * x.pivot.quantity)).reduce((a, b) => a += b),
                payment_type: order.payment_type,
                status_id: (order.status_id || 2),
                observation: order.observation,
                date_finish: order.date_finish
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
                <OrderForm
                    handleSubmit={handleSubmit}
                    values={values}
                    handleInputChange={handleInputChange}
                    resetForm={resetForm}
                    loading={loading}
                />
            </Container>
        </Grid>
    )
}

export default withSnackbar(FormOrder)