import React, { Component } from "react";
import { Redirect } from "react-router";
import { 
  TextField, 
  Button, 
  Container,
  Dialog,
  DialogContent,
  DialogTitle, 
} from "@material-ui/core";

class Login extends Component {
  state = {
    username: "",
    password: "",
    newuser: "",
    newpassword: "",
    redirect: false,
  };

  toggleDialog = () => this.setState({ open: !this.state.open });
  handleTextChange = e => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  displayLocalState = e => {
    e.preventDefault();
    const userObject = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(userObject);
  }


  login = (e) => {
    e.preventDefault();
    // alert('did it run?')
    const userObject = {
      username: this.state.username,
      userpassword: this.state.password
    };
    console.log("This is the userObject the Login.js component sent to actions: " + userObject)
    this.props.login(userObject);
    console.log(this.props.user.username)
    
  };

  createAccount = (e) => {
    const userObject = {
      username: this.state.newuser,
      userpassword: this.state.newpassword,
    };
    
    e.preventDefault();
    if (this.state.userName !== "") {
    this.props.signUp(userObject);
    
    } 
  };



  componentDidUpdate() { 

    if(this.props.user.username !== ""){
      
      document.cookie = "loggedIn=true; max-age = 60*1000";
      this.setState({redirect: true});
    }

  }


  render() {

    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <br/>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
              
            >
              Login
            </Button>
            <Button
              variant="contained"
              className="add-user"
              onClick={this.toggleDialog}
            >
              Sign Up
            </Button>
          </form>
          <div>
            <Dialog open={this.state.open} onClose={this.toggleDialog}>
              <DialogTitle>Create Account</DialogTitle>
              <DialogContent>
                <form
                  onSubmit={this.createAccount}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                  }}
                >
                  <TextField
                    required
                    onChange={this.handleTextChange}
                    value={this.state.newuser}
                    name="newuser"
                    label="Username"
                    type="text"
                  />
                  <TextField
                    required
                    onChange={this.handleTextChange}
                    value={this.state.newpassword}
                    name="newpassword"
                    label="Password"
                    type="password"
                  />
                  <br />
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </Container>
      </div>
    );
  }
}

export default Login;
