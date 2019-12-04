import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { ListItem, List, ListItemText, Link, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => {
  return {
    card: {
      backgroundColor: "#fff",
      boxShadow: "0 2px 3px rgba(127,127,127,0.4)",
      display: "flex",
      marginBottom: "10px",
      overflow: "hidden"
    },
    danger: {
        backgroundColor: "#d32f2f",
        color: "#fff",
        padding: "2px",
        border: "none",
        cursor:"pointer"
    }
  };
});
export default function Home() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const [id, setId] = useState();
  const handleClick = id => {
    setId(id);
    };
    
    const deleteUser = (e) => {
        setUsers(users.filter(u => u.id != e.target.value ))
        Axios.delete("http://localhost:8080/students?id"+e.target.value).then(
            res => alert("User deleted ")
        )
    }
  useEffect(() => {
    Axios.get("http://localhost:8080/students/")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <List>
      <h3>Users</h3>
      {users.map(user => {
        return (
          <ListItem
            key={user.id}
            className={classes.card}
            onClick={() => {
              handleClick(user.id);
            }}
          >
            <ListItemText primary={user.name}></ListItemText>
            {/* Email:<ListItemText>{user.email}</ListItemText> */}
                <button className={classes.danger} onClick={deleteUser} value={user.id}>
                    DELETE
                </button>
          </ListItem>
        );
      })}
    </List>
  );
}
