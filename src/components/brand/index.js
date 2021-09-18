import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Container, makeStyles, Grid } from '@material-ui/core';
import Toolbar from './Toolbar'
import List from './List'
import { withSnackbar } from '../snackbar'
import * as BrandService from '../../services/brandService'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const BrandList = ({ snackbarShowMessage }) => {
    const [brandsList, setBrands] = useState([])
    const [loading, setLoading] = useState(false);

    const searchBrands = () => {
        setLoading(true)

        BrandService
            .brand_list()
            .then(resp => updateBrands(createInitialList(resp)))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        searchBrands()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createInitialList = (list) => {
        list.forEach(x => {
            x.Checked = false
        })
        return list
    }

    const updateBrands = (newList) => setBrands(newList.slice())

    const updateBrandsList = (newList) => updateBrands(newList)

    const deleteSelected = () => {
        setLoading(true)

        const brandsDelete = brandsList.filter(x => x.Checked).map(x => x.id)

        const promises = []

        brandsDelete.forEach(id => {
            promises.push(BrandService.brand_delete(id))
        })

        Promise
            .all(promises)
            .then((resp) => {
                console.log(resp)
                searchBrands()
                snackbarShowMessage(resp[0].message)
            })
            .finally(() => setLoading(false))


    }


    const classes = useStyles();

    return (
        <Grid item sm={12}>
            <Container className={classes.container}>
                <Helmet>
                    <title>Marcas</title>
                </Helmet>
                <Toolbar deleteSelected={deleteSelected} loading={loading} brands={brandsList} />
                <List updateBrandsList={updateBrandsList} brands={brandsList} />
            </Container>
        </Grid>
    );
}

export default withSnackbar(BrandList);
