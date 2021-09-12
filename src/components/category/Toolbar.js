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

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '0px',
        width: '100%',
        maxWidth: '100%'
    },
}));

const CategoryToolbar = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <Button
                    color="primary"
                    variant="contained"
                >
                    Adicionar Categoria
                </Button>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Card>
                    <CardContent>
                        <TextField
                            fullWidth
                            size="sm"
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
