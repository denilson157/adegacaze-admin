import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Box,
    Drawer,
    Hidden,
    List
} from '@material-ui/core';
import NavItem from './navbarItem';
import { items } from './menuItems'


const DashboardSidebar = ({ onMobileClose, openMobile }) => {
    const location = useLocation();

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const content = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <Box sx={{ p: 2 }}>
                <List>
                    {items.map((item) => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </List>
            </Box>
        </Box>
    );

    return (
        <>
            <Hidden mdUp>
                <Drawer
                    anchor="left"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            width: 256
                        }
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    anchor="left"
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: 256,
                            top: 64,
                            height: 'calc(100% - 64px)'
                        }
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
};
export default DashboardSidebar;
