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

const useStyles = makeStyles((theme) => ({
    circular: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    input: {
        paddingRight: theme.spacing(1)
    }
}));

const OrderForm = ({ handleSubmit, values, handleInputChange, errors, loading }) => {

    const classes = useStyles();

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Box className={classes.row}>

                    <Typography variant="h3">
                        Usuário #{values.id}
                    </Typography>
                </Box>
                <Grid item xs={12} mx={0}>


                    <Controls.Input
                        name="id"
                        label="Id"
                        disabled={true}
                        className={classes.input}
                        value={values.id}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="name"
                        disabled={true}
                        label="Nome"
                        className={classes.input}
                        value={values.name}
                        onChange={handleInputChange}
                    />
                    <Box display="flex">
                        <Controls.Button
                            text="Voltar"
                            color="secondary"
                            to="/user"
                            component={RouterLink}
                        />
                    </Box>

                </Grid>

            </Grid>
        </Form >
    )
}

export default OrderForm