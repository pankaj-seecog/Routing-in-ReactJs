import React from 'react';
import {BrowserRouter,Route,Link,Switch,NavLink} from 'react-router-dom';
import Users from './Users';
import User from './User';

class  Home extends React.Component{

render(){
  return (
    <BrowserRouter>
<Nav/> 
<Switch>
<Route path="/" exact  component={First}/>
<Route path="/second" component={Second}/>
<Route path="/third" component={Third}/>
<Route path="/users" component={Users}/>
<Route path="/user/:id" component={User}/>
<Route component={Error}/>
</Switch>
    </BrowserRouter>
  )
}

}

const Error = ()=>{
  return (
    <div>
<h3>Page does not exist</h3>
    </div>
  )
}

const Nav = ()=>{
  const linkstyle={
    color : "green"
  }

  return (
   <div>
<NavLink activeStyle={linkstyle} to="/">Home</NavLink> | 
<NavLink to="/second" activeStyle={linkstyle} >Second</NavLink> |   
<NavLink activeStyle={linkstyle} to="/third">Third</NavLink> | 
<NavLink activeStyle={linkstyle} to="/users">Users</NavLink>

   </div>


  )
}

const First = ()=>{
  return (
    <div>
<h1>First Page</h1>
    </div>
  )
}

const Second = ()=>{
  return (
    <div>
<h1>Second Page</h1>
    </div>
  )
}

const Third = ()=>{
  return (
    <div>
<h1>Third Page</h1>
    </div>
  )
}

export  default Home;