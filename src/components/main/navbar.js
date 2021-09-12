import {
    AppBar,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logo: {
        display: "block"
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logo}>
                    Adega Cazé
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
