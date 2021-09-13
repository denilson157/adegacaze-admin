import {
  NavLink as RouterLink
} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const NavItem = ({
  href,
  icon: Icon,
  title
}) => {
  const classes = useStyles();

  return (
    <Button
      component={RouterLink}
      className={classes.item}
      to={href}
    >
      <Icon className={classes.icon} />
      <div
        className={classes.text}>
        {title}
      </div>
    </Button >
  );
}

export default NavItem;
