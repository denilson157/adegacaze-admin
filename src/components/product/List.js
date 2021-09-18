import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    Container,
    TableRow,
    makeStyles,
    IconButton
} from '@material-ui/core';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import {
    NavLink as RouterLink
} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const ProductListResults = ({ products, updateProductsList }) => {

    const handleSelectAll = (event) => {
        products.forEach((product) =>
            product.Checked = event.target.checked
        )
        const list = products

        updateProductsList(
            list
        )
    }

    const handleSelectOne = id => {
        const productsUpdate = [...products]

        const selectedIndex = productsUpdate.map(x => x.id).indexOf(id);

        if (selectedIndex >= 0)
            productsUpdate[selectedIndex].Checked = !productsUpdate[selectedIndex].Checked

        updateProductsList(productsUpdate);
    };

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <PerfectScrollbar>
                <Box>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={products.length === 0 ? false : products.every(x => x.Checked)}
                                        color="primary"
                                        indeterminate={
                                            !products.every(x => x.Checked) &&
                                            products.some(x => x.Checked)
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell>
                                    Nome
                                </TableCell>
                                <TableCell>
                                    Ação
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow
                                    hover
                                    key={product.id}
                                    selected={product.Checked}
                                    color="primary"
                                >
                                    <TableCell padding="checkbox"
                                        color="primary">
                                        <Checkbox
                                            checked={product.Checked}
                                            onChange={() => handleSelectOne(product.id)}
                                            value="true"
                                            color="primary"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {product.name}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            color="primary"
                                            variant="contained"
                                            to={`/app/product/store/${product.id}`}
                                            component={RouterLink}
                                        >
                                            <EditRoundedIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
        </Container>
    );
};

export default ProductListResults;
