import React,{ Component } from "react";

import { BrowserRouter as Router, Route, Link, Prompt,Redirect } from "react-router-dom";

class Home extends Component{
    render(){
        return (
            <div>this a Home page 
              <div>id:{this.props.match.url}</div>
            </div>
        )
    }
}
class Other extends Component{
    render(){
        return (
            <div>this a Other page</div>
        )
    }
}
class Info extends Component{
    render(){
        return (
            <div>this a Info page</div>
        )
    }
}
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            toast: false,
        }
    }
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">首页
                        <Prompt when={false} message="您确定要离开当前页面吗？"/>
                        </Link></li>
                        <li><Link to="/other">其他页</Link></li>
                        <li><Link to="/info">列表页</Link></li>
                        
                    </ul>

                    <Route path="/:id" component={Home}/>
                    <Route path="/other" component={Other}/>
                    <Route path="/info" component={Info}/>
                    <Route path="/home" render={()=><Redirect to="/other"/>}/>
                </div>
            </Router>
        )
    }
}
export default Main