import { Helmet } from 'react-helmet';
import { Container, makeStyles } from '@material-ui/core';
import Toolbar from './Toolbar'
import List from './List'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));


const CustomerList = () => {

    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Helmet>
                <title>Categorias</title>
            </Helmet>
            <Toolbar />
            <List categories={[]} />
        </Container>
    );
}

export default CustomerList;
