import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Container, makeStyles, Grid } from '@material-ui/core';
import Toolbar from './Toolbar'
import List from './List'

import * as APICategory from '../../services/categoryService'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));

const initialPageProps = {
    loading: false
}


const CategoryList = () => {
    const [categoriesList, setCategories] = useState([])
    const [pageProps, setPageProps] = useState(initialPageProps);

    const setLoading = (bool) => setPageProps({ ...pageProps, loading: bool })


    const searchCategories = () => {
        setLoading(true)

        APICategory
            .category_list()
            .then(resp => updateCategories(createInitialList(resp)))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        searchCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createInitialList = (list) => {
        list.forEach(x => {
            x.Checked = false
        })
        return list
    }

    const updateCategories = (newList) => setCategories(newList.slice())

    const updateCategoriesList = (newList) => updateCategories(newList)


    const classes = useStyles();

    return (
        <Grid item sm={12}>
            <Container className={classes.container}>
                <Helmet>
                    <title>Categorias</title>
                </Helmet>
                <Toolbar categories={categoriesList} />
                <List updateCategoriesList={updateCategoriesList} categories={categoriesList} />
            </Container>
        </Grid>
    );
}

export default CategoryList;
