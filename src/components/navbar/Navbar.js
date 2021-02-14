import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { appContext } from "../../context/AppContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navBar: {
        backgroundColor: '#65394C'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory();
    const { token, setToken } = useContext(appContext);

    const isAuth = localStorage.getItem("token");
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClick = () => {
        history.push("/profile");
        setAnchorEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMainPage = () => {
        history.push("/");
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        history.push("/");
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <FormGroup></FormGroup>
            <AppBar className = {classes.navBar} position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMainPage}
                    >
                        <LocalDiningIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Recipe Blog
                    </Typography>
                    {token ? (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                style={{ marginTop: "3.2rem" }}
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    ) : (
                            <>
                                <Button onClick={() => history.push("/login")} color="inherit">
                                    Login
                                </Button>
                                <Button onClick={() => history.push("/register")} color="inherit">
                                    Register
                                </Button>
                            </>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    );
}