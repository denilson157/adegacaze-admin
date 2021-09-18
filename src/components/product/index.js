import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Container, makeStyles, Grid } from '@material-ui/core';
import Toolbar from './Toolbar'
import List from './List'
import { withSnackbar } from '../snackbar'
import * as ProductService from '../../services/productService'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const ProductList = ({ snackbarShowMessage }) => {
    const [productsList, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    const searchProducts = () => {
        setLoading(true)

        ProductService
            .product_list()
            .then(resp => updateProducts(createInitialList(resp)))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        searchProducts()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createInitialList = (list) => {
        list.forEach(x => {
            x.Checked = false
        })
        return list
    }

    const updateProducts = (newList) => setProducts(newList.slice())

    const updateProductsList = (newList) => updateProducts(newList)

    const deleteSelected = () => {
        setLoading(true)

        const productsDelete = productsList.filter(x => x.Checked).map(x => x.id)

        const promises = []

        productsDelete.forEach(id => {
            promises.push(ProductService.product_delete(id))
        })

        Promise
            .all(promises)
            .then((resp) => {
                console.log(resp)
                searchProducts()
                snackbarShowMessage(resp[0].message)
            })
            .finally(() => setLoading(false))


    }


    const classes = useStyles();

    return (
        <Grid item sm={12}>
            <Container className={classes.container}>
                <Helmet>
                    <title>Produtos</title>
                </Helmet>
                <Toolbar deleteSelected={deleteSelected} loading={loading} products={productsList} />
                <List updateProductsList={updateProductsList} products={productsList} />
            </Container>
        </Grid>
    );
}

export default withSnackbar(ProductList);
