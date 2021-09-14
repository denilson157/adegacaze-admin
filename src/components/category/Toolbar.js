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
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import {
    NavLink as RouterLink
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));

const CategoryToolbar = ({ categories }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <Box mx={2}>
                    <Button
                        color="secondary"
                        variant="contained"
                        disabled={categories.length > 0 ? categories.every(x => !x.Checked) : true}
                    >
                        Excluir selecionados
                    </Button>

                </Box>
                <Button
                    color="primary"
                    variant="contained"
                    to="/app/category/store"
                    component={RouterLink}
                >
                    Adicionar categoria
                </Button>
            </Box>
            <Box sx={{ mt: 3 }}>
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
            </Box>
        </Container>
    )
}

export default CategoryToolbar;
