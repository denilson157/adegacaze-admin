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


const BrandListResults = ({ brands, updateBrandsList }) => {

    const handleSelectAll = (event) => {
        brands.forEach((brand) =>
            brand.Checked = event.target.checked
        )
        const list = brands

        updateBrandsList(
            list
        )
    }

    const handleSelectOne = id => {
        const brandsUpdate = [...brands]

        const selectedIndex = brandsUpdate.map(x => x.id).indexOf(id);

        if (selectedIndex >= 0)
            brandsUpdate[selectedIndex].Checked = !brandsUpdate[selectedIndex].Checked

        updateBrandsList(brandsUpdate);
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
                                        checked={brands.length === 0 ? false : brands.every(x => x.Checked)}
                                        color="primary"
                                        indeterminate={
                                            !brands.every(x => x.Checked) &&
                                            brands.some(x => x.Checked)
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
                            {brands.map((brand) => (
                                <TableRow
                                    hover
                                    key={brand.id}
                                    selected={brand.Checked}
                                    color="primary"
                                >
                                    <TableCell padding="checkbox"
                                        color="primary">
                                        <Checkbox
                                            checked={brand.Checked}
                                            onChange={() => handleSelectOne(brand.id)}
                                            value="true"
                                            color="primary"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {brand.name}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            color="primary"
                                            variant="contained"
                                            to={`/app/brand/store/${brand.id}`}
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

export default BrandListResults;
