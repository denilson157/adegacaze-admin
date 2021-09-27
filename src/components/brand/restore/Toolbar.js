import {
    Button,
    Container,
    makeStyles,
    CircularProgress
} from '@material-ui/core';
import RestoreFromTrashRoundedIcon from '@material-ui/icons/RestoreFromTrashRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import {
    NavLink as RouterLink
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '0px',
        width: '100%',
        maxWidth: '100%',
        display: 'flex'
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
    }
}));

const BrandToolbar = ({ brands, restoreSelected, loading }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Button
                color="default"
                variant="contained"
                to="/brand"
                component={RouterLink}
                className={classes.button}
            >
                <ArrowBackRoundedIcon className={classes.icon} /> voltar
            </Button>

            <Button
                color="primary"
                variant="contained"
                to="/brand/store"
                component={RouterLink}
                className={classes.button}
            >
                <AddRoundedIcon className={classes.icon} /> marca
            </Button>

            <Button
                color="primary"
                variant="contained"
                disabled={brands.length > 0 ? brands.every(x => !x.Checked) : true}
                onClick={restoreSelected}
                className={classes.button}
            >
                <RestoreFromTrashRoundedIcon className={classes.icon} /> Restaurar
            </Button>
            {
                loading &&
                <CircularProgress className={classes.circular} />
            }


        </Container>
    )
}

export default BrandToolbar;
