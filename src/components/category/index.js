import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Container, makeStyles, useForkRef } from '@material-ui/core';
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


const CategoryList = () => {
    const [categoriesList, setCategories] = useState([])
    const [loading, setloading] = useState(false);

    useEffect(() => {
        searchCategories()
    }, [])

    const searchCategories = () => {
        setloading(true)

        APICategory
            .category_list()
            .then(resp => setCategories(resp))
            .finally(() => setloading(false))
    }

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Helmet>
                <title>Categorias</title>
            </Helmet>
            <Toolbar />
            <List categories={categoriesList} />
        </Container>
    );
}

export default CategoryList;
