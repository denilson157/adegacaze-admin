import {
    Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { items } from './MenuItems'
import NavItem from './NavbarItem';

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7",
        },
    },
}));

const DashboardSidebar = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {
                (items || []).map((item, i) => (
                    <NavItem
                        href={item.href}
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                    />
                ))
            }
        </Container>
    );
};

export default DashboardSidebar;
