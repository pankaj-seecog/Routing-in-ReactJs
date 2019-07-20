import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
class Users extends React.Component{

constructor(){
  super();
  this.state = {
    users : []
  };
}

componentDidMount(){
axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
this.setState({
  users : res.data
})
})
.catch((err)=>{
  console.log('The error is ',err);
})
}

render(){
  return (
    <div>
<ul>
{
  this.state.users.map((user,i)=>{
    let id = "users/"+user.id;
    return (
      <li key={i}>
      <NavLink to="/user/7">
      {user.title}
      </NavLink>
      </li>
    )
  })
}
</ul>
    </div>
  )
}


}

export default Users;