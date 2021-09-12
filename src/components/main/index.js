import { Grid } from "@material-ui/core";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item sm={10} xs={10}>
                    <Outlet />
                </Grid>
            </Grid>
        </div>
    );
};

export default Main;
