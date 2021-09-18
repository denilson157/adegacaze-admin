import React from 'react'
import {
    Grid, Box, Typography,
    makeStyles, CircularProgress
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
    }
}));

const ProductForm = ({ handleSubmit, values, handleInputChange, errors, loading }) => {
    const classes = useStyles();
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Typography variant="h4">
                    Cadastrar Produto
                    {
                        loading &&
                        <CircularProgress className={classes.circular} />
                    }
                </Typography>
                <Grid item xs={12} mx={0}>
                    <Box display="none">
                        <Controls.Input
                            name="id"
                            label="Id"
                            display="none"
                            value={values.id}
                            onChange={handleInputChange}
                            error={errors.id}
                        />
                    </Box>
                    <Controls.Input
                        name="name"
                        label="Nome"

                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />


                    <Box display="flex">
                        <Controls.Button
                            type="submit"
                            text="Salvar"
                            onClick={handleSubmit}
                        />
                        <Box px={2}>
                            <Controls.Button
                                text="Voltar"
                                color="secondary"
                                to="/app/product"
                                component={RouterLink}
                            />
                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </Form>
    )
}

export default ProductForm