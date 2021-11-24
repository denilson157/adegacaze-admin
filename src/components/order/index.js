import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Container, makeStyles, Grid } from '@material-ui/core';
import Toolbar from './Toolbar'
import List from './List'
import { withSnackbar } from '../snackbar'
import * as OrderService from '../../services/orderService'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const OrderList = ({ snackbarShowMessage }) => {
    const [ordersList, setOrders] = useState([])
    const [loading, setLoading] = useState(false);

    const searchOrders = () => {
        setLoading(true)

        OrderService
            .order_list()
            .then(resp => updateOrders(createInitialList(resp)))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        searchOrders()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createInitialList = (list) => {
        list.forEach(x => {
            x.Checked = false
        })
        return list
    }

    const updateOrders = (newList) => setOrders(newList.slice())

    const updateOrdersList = (newList) => updateOrders(newList)

    const classes = useStyles();

    return (
        <Grid item sm={12}>
            <Container className={classes.container}>
                <Helmet>
                    <title>Pedidos</title>
                </Helmet>
                <Toolbar loading={loading} orders={ordersList} />
                <List updateOrdersList={updateOrdersList} orders={ordersList} />
            </Container>
        </Grid>
    );
}

export default withSnackbar(OrderList);
