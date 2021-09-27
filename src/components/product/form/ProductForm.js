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

const ProductForm = ({
    handleSubmit,
    values,
    handleInputChange,
    errors,
    loading,
    brandList,
    imageAtt
}) => {
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

                    <Controls.Input
                        name="price"
                        label="Preço"
                        type="number"
                        value={values.price}
                        onChange={handleInputChange}
                        error={errors.price}
                    />
                    <Controls.Select
                        name="brand_id"
                        label="Marca"
                        options={brandList}
                        value={values.brand_id}
                        onChange={handleInputChange}
                        error={errors.brand_id}
                    />

                    <Controls.Input
                        name="description"
                        label="Descrição"

                        value={values.description}
                        onChange={handleInputChange}
                        error={errors.description}
                    />

                    <Controls.Checkbox
                        name="promotion"
                        label="Promoção"

                        value={values.promotion}
                        onChange={handleInputChange}
                        error={errors.promotion}
                    />

                    <Controls.Input
                        name="img"
                        label="Imagem URL"
                        type="text"
                        value={values.img}
                        onChange={handleInputChange}
                        error={errors.img}
                        disabled={true}
                    />

                    <Box display="none">

                        <Controls.Input
                            name="img_id"
                            label="Imagem URL"
                            type="text"
                            value={values.img_id}
                            onChange={handleInputChange}
                            error={errors.img_id}
                            disabled={true}
                        />

                    </Box>

                    <Box>
                        <Controls.UploadImage
                            imageAtt={imageAtt}
                        />
                    </Box>

                    <Box display="flex" my={2}>
                        <Controls.Button
                            type="submit"
                            text="Salvar"
                            onClick={handleSubmit}
                        />
                        <Box px={2}>
                            <Controls.Button
                                text="Voltar"
                                color="secondary"
                                to="/product"
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