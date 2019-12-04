import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Person from "@material-ui/icons/Person";
import PersonAdd from "@material-ui/icons/PersonAdd";

import { useStyles } from "../../utils/Styles";
import AppRouter from "../AppRouter";
import Home from "../Home";
import AddUser from "../AddUser";
import { toast } from 'react-toastify'

import TextField from '@material-ui/core/TextField';

export default function Container(props) {
  const classes = useStyles();
  
  const [text,setText]=React.useState()
  const handleChange = event => {
    setText(event.target.value)
  };
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState("relative");
  const [activeComponent, setActiveComponent] = React.useState();
  
  useEffect(() => {
    setActiveComponent(window.location.pathname.includes("users") ? "Users" : "Add User")
  })
  const handleDrawerHover = () => {
    if (position === "relative" && open) return false;
    setPosition("absolute");
    setOpen(!open);
  };
  const isInvalidText = () => {
    return text&&(text.length < 6 || text.length > 25);
  }
  const handleDrawerOpen = () => {
    setPosition("relative");
    setOpen(!open);
    toast("Hello world",{autoClose:false,draggable:true,position:"bottom-right",transition:"left"})
  };

  return (
    <AppRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={clsx(classes.appBar)}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              React Hook Samples
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
          onMouseEnter={handleDrawerHover}
          onMouseLeave={handleDrawerHover}
          style={{ position: position }}
        >
          <div className={classes.toolbar} />
          <List>
            {["Users", "Add User"].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => setActiveComponent(text)}
                style={{
                  backgroundColor:
                    activeComponent === text ? "rgba(0,0,0,0.1)" : ""
                }}
              >
                <Link
                  to={index % 2 === 0 ? "/users" : "/addUser"}
                  style={{ textDecoration: "none", color: "#ff5722" }}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <Person color="primary" />
                    ) : (
                      <PersonAdd color="primary" />
                    )}
                  </ListItemIcon>
                </Link>

                <ListItemText>{text}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classes.content}
          style={{
            position: position,
            left: position === "absolute" ? "73px" : "0px"
          }}
        >

    <form  autoComplete="off">
            <TextField
              id="standard-name"
              label="Name"
              onChange={handleChange}
              margin="normal"
              error={ isInvalidText()}
              helperText={isInvalidText()?"Rule Name should be of 6 to 25  characters":""}
      />
      <input type="submit"/>
    </form>

          <div className={classes.toolbar} />
          {activeComponent === "Users" ? <Home /> : <AddUser />}
        </main>
      </div>
    </AppRouter>
  );
}
