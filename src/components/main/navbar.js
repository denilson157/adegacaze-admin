import { useState } from 'react';
import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
    const [notifications] = useState([]);

    return (
        <AppBar
            elevation={0}
            {...rest}
        >
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton color="inherit" size="large">
                    <Badge
                        badgeContent={notifications.length}
                        color="primary"
                        variant="dot"
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" size="large">
                    <InputIcon />
                </IconButton>
                <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardNavbar;
