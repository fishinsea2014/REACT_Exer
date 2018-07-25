import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Prompt, Redirect} from "react-router-dom"


class Home  extends Component{
  render(){
    return (
      <div>
        <h1>This is home
          <div>{this.props.match.params.id}</div>
          <div>{this.props.match.url}</div>
          <div>{this.props.match.path}</div>
        </h1>
      </div>
    )
  }
}

class Other  extends Component{
  render(){
    return (
      <div>
        <h1>This is Other</h1>
      </div>
    )
  }
}

class Info  extends Component{
  render(){
    return (
      <div>
        <h1>This is Info</h1>
      </div>
    )
  }
}

class Main extends Component {
  constructor(){
    super();
    this.state = {
      id:111
    }
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to={"/home/"+this.state.id}>Home</Link></li>
            <Prompt message='Your are leaving the cur page.' when={false}></Prompt>
            <li><Link to="/other">Others</Link></li>
            <li><Link to="/info">Info</Link></li>
          </ul>
          <Route path="/home/:id" component={Home}></Route>
          {/* <Route path="/home/:id" render={()=><Redirect to='/Info' />} /> */}
          <Route path="/other" component={Other}></Route>
          <Route path="/info" component={Info}></Route>
        </div>
      </Router>
    );
  }
}

export default Main;
