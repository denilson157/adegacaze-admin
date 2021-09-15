import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Container, makeStyles, Grid } from '@material-ui/core';
import Toolbar from './Toolbar'
import List from './List'

import * as CategoryService from '../../../services/categoryService'

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

        CategoryService
            .category_list_trash()
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

    const restoreSelected = () => {
        setLoading(true)

        const categoriesRestore = categoriesList.filter(x => x.Checked).map(x => x.id)

        const promises = []

        categoriesRestore.forEach(id => {
            promises.push(CategoryService.category_restore(id))
        })

        Promise
            .all(promises)
            .then((resp) => {
                searchCategories()
            })
            .finally(() => setLoading(false))


    }


    const classes = useStyles();

    return (
        <Grid item sm={12}>
            <Container className={classes.container}>
                <Helmet>
                    <title>Categorias | Excluídas</title>
                </Helmet>
                <Toolbar restoreSelected={restoreSelected} categories={categoriesList} />
                <List updateCategoriesList={updateCategoriesList} categories={categoriesList} />
            </Container>
        </Grid>
    );
}

export default CategoryList;
