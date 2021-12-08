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

const status = [
    { id: 1, name: "Pedido realizado" },
    { id: 2, name: "Saiu para entrega" },
    { id: 3, name: "Finalizado" },
]


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
                                    Data Pedido
                                </TableCell>
                                <TableCell>
                                    Total
                                </TableCell>
                                <TableCell>
                                    Status
                                </TableCell>
                                <TableCell>
                                    Feito por
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
                                            {status.find(x => x.id === order.status_id)?.name}
                                        </TableCell>
                                        <TableCell>
                                            {order.user?.name}
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
