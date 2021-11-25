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


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const UserListResults = ({ users }) => {

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
                                    Nome
                                </TableCell>
                                <TableCell>
                                    Ações
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => {

                                return (
                                    <TableRow
                                        hover
                                        key={user.id}
                                        color="primary"
                                    >
                                        <TableCell>
                                            {user.id}
                                        </TableCell>
                                        <TableCell>
                                            {user.name}
                                        </TableCell>

                                        <TableCell>
                                            <IconButton
                                                color="primary"
                                                variant="contained"
                                                to={`/user/details/${user.id}`}
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

export default UserListResults;
