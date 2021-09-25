import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    AppBar, Toolbar, IconButton, Typography, Hidden,
    Drawer, CssBaseline, makeStyles,
    MenuItem,
    Box
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { items } from './MenuItems'
import { Outlet } from 'react-router-dom'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import * as UserService from '../../services/userService'
import { logout } from '../../services/auth'
import {
    NavLink
} from 'react-router-dom';
const drawerWidth = 190

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingRigth: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: drawerWidth
        },
    },
    item: {
        display: "flex",
        alignItems: "center",
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    text: {
        fontWeight: 500
    },
    menuItem: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    linkAdega: {
        color: 'white',
        textDecoration: 'none'
    }
}));

const Layout = () => {
    const [mobileOpen, setmobileOpen] = useState(false)

    const classes = useStyles();

    const logoff = () => {
        logout()
        UserService.user_logout()
        window.location.reload();
    }

    const NavItem = ({
        href,
        icon: Icon,
        title
    }) => {
        const classes = useStyles();

        return (
            <MenuItem className={classes.menuItem} component={Link} to={href}>
                <Icon className={classes.icon} />
                <div className={classes.text} >
                    {title}
                </div>
            </MenuItem >
        );
    }

    const drawer = (
        <div>
            <Hidden smDown>
                <div className={classes.toolbar} />
            </Hidden>
            {
                items.map((x, idx) =>
                    <Fragment key={idx}>
                        <NavItem
                            href={x.href}
                            icon={x.icon}
                            title={x.title}
                        />
                    </Fragment>
                )
            }
        </div>
    )

    const appBar = (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setmobileOpen(!mobileOpen)}
                    className={classes.navIconHide}
                >
                    <Menu />
                </IconButton>
                <NavLink className={classes.linkAdega} to="/app/home">
                    <Typography variant="h6" color="inherit" noWrap>
                        Adega Cazé
                    </Typography>
                </NavLink>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={logoff}
                    color="inherit"
                >
                    <ExitToAppRoundedIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )

    const sidebar = (
        <>
            {/* Mobile */}
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={() => setmobileOpen(!mobileOpen)}
                    className={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>

            {/* Desktop */}
            <Hidden smDown implementation="css">
                <Drawer
                    variant="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {drawer}
                </Drawer>

            </Hidden>
        </>
    )

    return (
        <Fragment>
            <CssBaseline />

            <div className={classes.root}>

                {appBar}

                {sidebar}

                <main className={classes.content}>
                    <Outlet />
                </main>

            </div>
        </Fragment>
    )
}

export default Layout
