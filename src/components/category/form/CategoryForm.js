import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core';
import Controls from "../../fields";
import { Form } from '../../../util/form'
import {
    NavLink as RouterLink
} from 'react-router-dom';

const CategoryForm = ({ handleSubmit, values, handleInputChange, errors, resetForm }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Typography variant="h4">
                    Cadastrar Categoria
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
                            text="Submit"
                            onClick={handleSubmit}
                        />
                        <Box px={2}>
                            <Controls.Button
                                text="Voltar"
                                color="secondary"
                                to="/app/category"
                                component={RouterLink}
                            />
                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </Form>
    )
}

export default CategoryForm