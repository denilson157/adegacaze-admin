import {
    CircularProgress,
    Button,
    // Card,
    // CardContent,
    // TextField,
    // InputAdornment,
    // SvgIcon,
    Container,
    makeStyles
} from '@material-ui/core';
// import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import RestoreFromTrashRoundedIcon from '@material-ui/icons/RestoreFromTrashRounded';
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

const CategoryToolbar = ({ categories, deleteSelected, loading }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Button
                color="primary"
                variant="contained"
                to="/app/category/store"
                component={RouterLink}
                className={classes.button}
            >
                <AddRoundedIcon className={classes.icon} />categoria
            </Button>

            <Button
                color="default"
                variant="contained"
                to="/app/category/restore"
                component={RouterLink}
                className={classes.button}
            >
                <RestoreFromTrashRoundedIcon className={classes.icon} /> restaurar
            </Button>


            <Button
                color="secondary"
                variant="contained"
                disabled={categories.length > 0 ? categories.every(x => !x.Checked) : true}
                onClick={deleteSelected}
                className={classes.button}
            >
                <DeleteRoundedIcon className={classes.icon} /> Excluir
            </Button>
            {
                loading &&
                <CircularProgress className={classes.circular} />
            }
        </Container>
    )
}

export default CategoryToolbar;
