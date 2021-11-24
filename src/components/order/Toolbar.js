import {
    CircularProgress,
    Container,
    makeStyles,
    Typography,
    Box
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        margin: '0px'
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    button: {
        marginRight: theme.spacing(2)
    },
    circular: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    buttons: {
        display: 'flex'
    },
    pageName: {
        paddingBottom: theme.spacing(2),
    }
}));

const OrderToolbar = ({ orders, deleteSelected, loading }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.pageName} variant="h4">Pedidos</Typography>
            <Box className={classes.buttons}>

                {
                    loading &&
                    <CircularProgress className={classes.circular} />
                }
            </Box>
        </Container>
    )
}

export default OrderToolbar;
