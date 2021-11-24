import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    Container,
    TableRow,
    makeStyles,
    IconButton
} from '@material-ui/core';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

import {
    NavLink as RouterLink
} from 'react-router-dom';
import { format_date, format_double } from '../../util/formatString';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const OrderListResults = ({ orders, updateOrdersList }) => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <PerfectScrollbar>
                <Box>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Id
                                </TableCell>
                                <TableCell>
                                    Data Entrega
                                </TableCell>
                                <TableCell>
                                    Total
                                </TableCell>
                                <TableCell>
                                    Ações
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => {

                                return (
                                    <TableRow
                                        hover
                                        key={order.id}
                                        selected={order.Checked}
                                        color="primary"
                                    >
                                        <TableCell>
                                            {order.id}
                                        </TableCell>
                                        <TableCell>
                                            {format_date(order.created_at)}
                                        </TableCell>
                                        <TableCell>
                                            {format_double(order.products.map(x => parseFloat(x.pivot.price * x.pivot.quantity)).reduce((a, b) => a += b))}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton
                                                color="primary"
                                                variant="contained"
                                                to={`/order/details/${order.id}`}
                                                component={RouterLink}
                                            >
                                                <RemoveRedEyeIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
        </Container>
    );
};

export default OrderListResults;
