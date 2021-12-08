import React, { useEffect, useState } from 'react'
import { useForm } from '../../../util/form';
import Validate from '../../../util/validate'
import ProductForm from './ProductForm'
import { Grid, makeStyles, Container } from '@material-ui/core';

import * as ProductService from '../../../services/productService'
import { brand_list } from '../../../services/brandService'
import { category_list } from '../../../services/categoryService'


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
    price: '',
    brand_id: "",
    description: '',
    promotion: false,
    img: '',
    img_id: '',
    category_id: ""
}

const FormProduct = ({ snackbarShowMessage }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false)
    const [brandList, setBrandList] = useState([])
    const [categoryList, setCategoryList] = useState([])

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
                        name: resp.resp.name,
                        price: resp.resp.price,
                        brand_id: resp.resp.brand_id,
                        description: resp.resp.description,
                        promotion: resp.resp.promotion,
                        img: resp.resp.img,
                        img_id: resp.resp.img_id,
                        category_id: resp.resp.category_id
                    })

                    snackbarShowMessage(resp.message)
                })
                .catch(() => snackbarShowMessage("Erro ao salvar produto", "error"))
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
                name: product.name,
                price: product.price,
                brand_id: product.brand_id,
                description: product.description,
                promotion: product.promotion === '1' ? true : false,
                img: product.img,
                img_id: product.img_id ? product.img_id : undefined,
                category_id: product.category_id

            })
        }
        else
            setValues(initialFValues)

    }

    const fillLists = () => {
        let promises = [
            brand_list(),
            category_list()
        ]
        setLoading(true)


        Promise.all(promises)
            .then(resp => {
                console.log(resp[1])
                setBrandList(resp[0])
                setCategoryList(resp[1])
            })
            .catch(() => {
                snackbarShowMessage("Erro ao carregar listas para o formuláro", "error")
            })
            .finally(() => setLoading(false))

    }

    const attachmentImage = (imgInfo) => {
        setValues({
            ...values,            
            img_id: imgInfo.originalUrl + imgInfo.name
        })
    }


    useEffect(() => {

        fillLists()
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
                    brandList={brandList}
                    imageAtt={attachmentImage}
                    categoryList={categoryList}
                />
            </Container>
        </Grid>
    )
}

export default withSnackbar(FormProduct)