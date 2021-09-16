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


const CategoryListResults = ({ categories, updateCategoriesList }) => {

    const handleSelectAll = (event) => {
        categories.forEach((category) =>
            category.Checked = event.target.checked
        )
        const list = categories

        updateCategoriesList(
            list
        )
    }

    const handleSelectOne = id => {
        const categoriesUpdate = [...categories]

        const selectedIndex = categoriesUpdate.map(x => x.id).indexOf(id);

        if (selectedIndex >= 0)
            categoriesUpdate[selectedIndex].Checked = !categoriesUpdate[selectedIndex].Checked

        updateCategoriesList(categoriesUpdate);
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
                                        checked={categories.length === 0 ? false : categories.every(x => x.Checked)}
                                        color="primary"
                                        indeterminate={
                                            !categories.every(x => x.Checked) &&
                                            categories.some(x => x.Checked)
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
                            {categories.map((category) => (
                                <TableRow
                                    hover
                                    key={category.id}
                                    selected={category.Checked}
                                    color="primary"
                                >
                                    <TableCell padding="checkbox"
                                        color="primary">
                                        <Checkbox
                                            checked={category.Checked}
                                            onChange={() => handleSelectOne(category.id)}
                                            value="true"
                                            color="primary"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {category.name}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            color="primary"
                                            variant="contained"
                                            to={`/app/category/store/${category.id}`}
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

export default CategoryListResults;
