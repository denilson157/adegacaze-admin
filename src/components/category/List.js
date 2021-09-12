import { useState } from 'react';
import PropTypes from 'prop-types';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    // TablePagination,
    Container,
    TableRow,
    makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const CategoryListResults = ({ categories, ...rest }) => {
    const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
        let newSelectedCategoryIds;

        if (event.target.checked) {
            newSelectedCategoryIds = categories.map((category) => category.id);
        } else {
            newSelectedCategoryIds = [];
        }

        setSelectedCategoryIds(newSelectedCategoryIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCategoryIds.indexOf(id);
        let newSelectedCategoryIds = [];



        setSelectedCategoryIds(newSelectedCategoryIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {/* <PerfectScrollbar> */}
            <Box sx={{ minWidth: 1050 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedCategoryIds.length === categories.length}
                                    color="primary"
                                    indeterminate={
                                        selectedCategoryIds.length > 0
                                        && selectedCategoryIds.length < categories.length
                                    }
                                    onChange={handleSelectAll}
                                />
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.slice(0, limit).map((category) => (
                            <TableRow
                                hover
                                key={category.id}
                                selected={selectedCategoryIds.indexOf(category.id) !== -1}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedCategoryIds.indexOf(category.id) !== -1}
                                        onChange={(event) => handleSelectOne(event, category.id)}
                                        value="true"
                                    />
                                </TableCell>
                                <TableCell>
                                    {category.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            {/* </PerfectScrollbar> */}
            {/* <TablePagination
                component="div"
                count={categories.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            /> */}
        </Container>
    );
};

export default CategoryListResults;
