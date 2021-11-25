import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Container, makeStyles, Grid } from '@material-ui/core';
import Toolbar from './Toolbar'
import List from './List'
import { withSnackbar } from '../snackbar'
import * as UserService from '../../services/userService'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const UserList = ({ snackbarShowMessage }) => {
    const [usersList, setUsers] = useState([])
    const [loading, setLoading] = useState(false);

    const searchUsers = () => {
        setLoading(true)

        UserService
            .user_list()
            .then(resp => updateUsers(createInitialList(resp)))
            .catch(() => snackbarShowMessage("Erro ao consultar usuários", "error"))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        searchUsers()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createInitialList = (list) => {
        list.forEach(x => {
            x.Checked = false
        })
        return list
    }

    const updateUsers = (newList) => setUsers(newList.slice())

    const classes = useStyles();

    return (
        <Grid item sm={12}>
            <Container className={classes.container}>
                <Helmet>
                    <title>Usuários</title>
                </Helmet>
                <Toolbar loading={loading} users={usersList} />
                <List users={usersList} />
            </Container>
        </Grid>
    );
}

export default withSnackbar(UserList);
