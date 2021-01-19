import React, {Component} from 'react'
// import { Button } from "@material-ui/core";

class Home extends Component {

    componentDidMount() {
        console.log(this.props.testProp)
        console.log(this.props.user.username)
      }

    // componentDidUpdate() {
    //     console.log(this.props.user)
    // }

    // showTheState() {
    //     console.log(this.props.user)
    // }

    render() {
        return (
            <div>
                <p style={{ textAlign: 'center', margin: '20px' }}> Welcome to the home page {this.props.user.username}</p>               
                {/* <Button onClick={this.showTheState}>Click me to check state</Button> */}
                <p style={{ textAlign: 'center', margin: '20px', padding: '20px' }}> 
                <h1>About</h1>
                This login app was made for practice. Its main purpose is to serve as a base for all future applications that I make. 
                It will also serve as an example full stack project that I can share with students to illustrate every aspect of a full stack application. 
                With this app I am utilizing a database with MySql, using a back-end application with Express, 
                and implementing a front-end application with React while hosting it online to make it available for display. 
                It is also my hope that the next time a student ask’s for help starting their capstone projects for Austin Coding Academy 
                I can use this app as an example and help any student step by step build the framework for a basic Full Stack application 
                that will immediately have authentication implemented. There’s always room for more improvement with this simple login-app 
                and any updates I make will be passed to my GitHub repository and then redeployed with the hosting website I am using for this app. 
                </p>
            </div>
            
        )
    }
}

export default Home