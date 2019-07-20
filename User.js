import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
class User extends React.Component{

constructor(){
  super();
  this.state = {
    user : {}
  };
}

componentDidMount(){
  console.log('The props is ',this.props.match.params.id)
axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id).then((res)=>{
console.log('The res is ',res.data)
this.setState({
  user : res.data
})
})
.catch((err)=>{
  console.log('The error is ',err);
})
}

render(){
  return (
    <div>
    Title : {this.state.user.title}
    <br/><hr/>
    Body : {this.state.user.body}
    </div>
  )
}


}

export default User;