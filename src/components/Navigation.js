import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core";

const Navigation = () => {
  return (
    // <AppBar position="relative">
    //   <Toolbar>
    //     <IconButton color="inherit">
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="h6" style={{ flexGrow: "1" }}>
    //       Login App
    //     </Typography>      
    //   </Toolbar>
    //   <div align="left">
    //       <Link to="/">Home</Link>  
    //       <Link to="/"  onClick={() => {
    //           document.cookie = "loggedIn=false";
    //           window.location.replace("/");
    //         }}>Logout</Link>
    //   </div>   
    // </AppBar>

    <AppBar position="staic">
              <Toolbar>
                <h1>Login App</h1>
              </Toolbar>
              <div align="left">
              <a href="/">
                  <Button>Home</Button>
                </a>  
              <a href="/"  onClick={() => {
               document.cookie = "loggedIn=false";
               window.location.replace("/");
               }}>
              <Button>
               Logout
               </Button>
              </a>
              <a href="https://github.com/tonezone108/Login-App">
                <Button>GITHUB</Button>
              </a>             
              </div>
            </AppBar>
  );
};

export default Navigation;
