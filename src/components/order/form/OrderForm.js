import React from 'react'
import {
    Grid, Box, Typography,
    makeStyles
} from '@material-ui/core';
import Controls from "../../fields";
import { Form } from '../../../util/form'
import {
    NavLink as RouterLink
} from 'react-router-dom';
import { format_date, format_double } from '../../../util/formatString';

const useStyles = makeStyles((theme) => ({
    circular: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    line: {
        display: 'flex'
    },
    input: {
        paddingRight: theme.spacing(1)
    },
    row: {
        paddingBottom: theme.spacing(3)
    }
}));

const OrderForm = ({ handleSubmit, values, handleInputChange, errors, loading }) => {

    const classes = useStyles();

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Box className={classes.row}>

                    <Typography variant="h3">
                        Pedido #{values.id}
                    </Typography>
                    <Typography variant="h4">
                        Total   R$ {format_double(values.total)}
                        {
                            values.date_finish && values.date_finish !== '' ?
                                ` - Entregue em ${format_date(values.date_finish)}`
                                :
                                <> </>
                        }
                    </Typography>
                </Box>
                <Grid item xs={12} mx={0}>


                    <Box className={classes.line}>
                        <Controls.Input
                            name="dataCadastro"
                            label="Data cadastro"
                            disabled={true}
                            className={classes.input}
                            value={format_date(values.created_at)}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            name="nomeEndereco"
                            disabled={true}
                            label="Nome Endereço"
                            className={classes.input}
                            value={values.name}
                            onChange={handleInputChange}
                        />
                        <Controls.Input
                            name="payment_type"
                            disabled={true}
                            label="Tipo de pagamento"
                            className={classes.input}
                            value={values.payment_type}
                            onChange={handleInputChange}
                        />

                    </Box>


                    <Box className={classes.line}>
                        <Controls.Input
                            name="nomeEndereco"
                            disabled={true}
                            label="Nome Endereço"
                            className={classes.input}
                            value={(values.street || '')}
                            onChange={handleInputChange}
                        />

                        <Controls.Input
                            name="numero"
                            disabled={true}
                            label="Número"
                            className={classes.input}
                            value={(values.number || '')}
                            onChange={handleInputChange}
                        />


                        <Controls.Input
                            name="complete"
                            disabled={true}
                            label="Complemento"
                            className={classes.input}
                            value={(values.complete || '')}
                            onChange={handleInputChange}
                        />
                    </Box>

                    <Box display="flex">

                        <Controls.Select
                            name="status_id"
                            label="Status"
                            options={
                                [
                                    { id: 1, name: "Pedido realizado" },
                                    { id: 2, name: "Saiu para entrega" },
                                    { id: 3, name: "Finalizado" },
                                ]
                            }
                            value={values.status_id}
                            onChange={handleInputChange}
                        />
                    </Box>


                    <Box display="flex">

                        <Controls.Input
                            name="observation"
                            label="Observações"
                            disabled={true}
                            className={classes.input}
                            value={(values.observation || '')}
                            onChange={handleInputChange}
                        />
                    </Box>

                    <Box display="flex">
                        <Controls.Button
                            type="submit"
                            text="Atualizar status"
                            onClick={handleSubmit}
                        />
                        <Box px={2}>
                            <Controls.Button
                                text="Voltar"
                                color="secondary"
                                to="/order"
                                component={RouterLink}
                            />
                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </Form >
    )
}

export default OrderForm