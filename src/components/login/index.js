import React, { useState } from 'react';
import * as UserService from '../../services/userService'
import { createBrowserHistory } from 'history'
import { withSnackbar } from '../snackbar'
import {
    Container,
    Button,
    TextField,
    Box,
    Typography,
    CircularProgress,
    makeStyles
} from '@material-ui/core';
import { login } from '../../services/auth';


const useStyles = makeStyles((theme) => ({
    box: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    boxImage: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center'
    },
    form: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    buttonLogin: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(1),
    }
}));

const Login = ({ snackbarShowMessage }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);



    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);


        const obj = {
            email: data.get('email'),
            password: data.get('password'),
            device_name: "Desktop"
        };

        setLoading(true)


        UserService
            .user_login(obj)
            .then(resp => {
                if (resp.resp) {
                    debugger
                    if (resp.resp.user.isAdmin) {

                        login(resp.resp.token);
                        createBrowserHistory().go(0)
                    } else
                        snackbarShowMessage("área permitida somente para administradores.", "error")
                } else
                    snackbarShowMessage(resp.message, "error")

            })
            .catch(erro => {
                snackbarShowMessage("Erro ao fazer login", "error")
                console.log(erro)
            })
            .finally(() => setLoading(false))
    };

    const Copyright = () =>
        <Typography variant="body2" color="text.secondary" align="center" >
            {'Copyright © Adega Cazé'}
            {new Date().getFullYear()}
            {'.'}
        </Typography>

    return (
        <Container component="main" maxWidth="xs">
            <Box className={classes.box} >
                <Box className={classes.boxImage}>
                    <img src="https://i.imgur.com/hXgKPI1.png" alt="caze logo" style={{ width: "40%", height: "auto" }} />
                </Box>
                <Typography component="h1" variant="h2">
                    Adega Cazé
                </Typography>
                <Typography component="h1" variant="h6">
                    Faça login para entrar
                </Typography>
                <Box component="form" onSubmit={handleSubmit} className={classes.form}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        type="email"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"

                    />

                    <Button
                        color="primary"
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.buttonLogin}
                    >
                        {
                            loading ?
                                <CircularProgress
                                    color="white"
                                    className={classes.circular}
                                />
                                :
                                'Entrar'
                        }

                    </Button>
                </Box>
            </Box>
            <Copyright />
        </Container>
    );
}


export default withSnackbar(Login)