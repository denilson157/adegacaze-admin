import {
    CircularProgress,
    Button,
    Container,
    makeStyles,
    Typography,
    Box
} from '@material-ui/core';

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import RestoreFromTrashRoundedIcon from '@material-ui/icons/RestoreFromTrashRounded';
import {
    NavLink as RouterLink
} from 'react-router-dom';

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

const CategoryToolbar = ({ categories, deleteSelected, loading }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.pageName} variant="h4">Categorias</Typography>
            <Box className={classes.buttons}>

                <Button
                    color="primary"
                    variant="contained"
                    to="/category/store"
                    component={RouterLink}
                    className={classes.button}
                >
                    <AddRoundedIcon className={classes.icon} />categoria
                </Button>

                <Button
                    color="default"
                    variant="contained"
                    to="/category/restore"
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
            </Box>
        </Container>
    )
}

export default CategoryToolbar;
