import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
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
    }
}));

const CategoryToolbar = ({ categories, deleteSelected }) => {
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

            <Box>
                <Button
                    color="default"
                    variant="contained"
                    to="/app/category/restore"
                    component={RouterLink}
                    className={classes.button}
                >
                    <RestoreFromTrashRoundedIcon className={classes.icon} /> restaurar
                </Button>

            </Box>
            <Box className={classes.button}>
                <Button
                    color="secondary"
                    variant="contained"
                    disabled={categories.length > 0 ? categories.every(x => !x.Checked) : true}
                    onClick={deleteSelected}
                    className={classes.button}
                >
                    <DeleteRoundedIcon className={classes.icon} /> Excluir
                </Button>

            </Box>

            {/* <Box sx={{ mt: 3 }}>
                <Card>
                    <CardContent>
                        <TextField
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                    >
                                        <SvgIcon
                                            fontSize="small"
                                            color="action"
                                        >
                                            <SearchRoundedIcon />
                                        </SvgIcon>
                                    </InputAdornment>
                                )
                            }}
                            variant="outlined"
                            placeholder="Pesquisar Categoria"
                        />
                    </CardContent>
                </Card>
            </Box> */}
        </Container>
    )
}

export default CategoryToolbar;
