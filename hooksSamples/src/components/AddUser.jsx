import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  IconButton,
  Snackbar
} from "@material-ui/core";
import { useStyles } from "../utils/Styles";
import CloseIcon from "@material-ui/icons/Close";
import Axios from "axios";
const styles = () =>
  makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "nowrap"
    },
    formControl: {
      width: 120
    },
    success: {
      backgroundColor: "#43a047"
    },
    error: {
      backgroundColor: "#d32f2f"
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: "flex",
      alignItems: "center"
    },
    ...useStyles()
  }));

export default function AddUser() {
  const classes = styles();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    Axios.post("http://localhost:8080/students", user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.data)
      .then(data => {
        if (data) {
          handleClose();
          setErr(null)
          setMsg("User " + data.name + " added!");
        } else {
          handleClose();
          setMsg(null)
          setErr("User " + user.name + " exists!");
        }
      })
      .catch(err => console.log(err));
  };
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.toolbar}>
      <form className={classes.container} onSubmit={handleSubmit}>
        <TextField
          name="name"
          className={classes.formControl}
          label="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          name="email"
          className={classes.formControl}
          label="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          name="password"
          className={classes.formControl}
          label="Password"
          value={user.password}
          onChange={handleChange}
          type="password"
          required
        />
        <br />
        <br />
        <br />
        <button>Add User</button>
      </form>
      {open && (
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          className={msg?classes.success:classes.error}
          open={open}
          color="primary"
          autoHideDuration={6000}
          onClose={handleClose}
          message={msg ? msg : err}
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
        />
      )}
    </div>
  );
}
