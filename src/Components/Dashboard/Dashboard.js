import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, getPosts} from '../../dux/reducer';
import Post from '../Post/Post';

class Dashboard extends Component {
      constructor(props){
            super(props);
            this.state={
                  users: [],
                  posts: []
            }
      }

componentDidMount(){
this.props.getUsers().then(res=> console.log(res.value.data) || this.setState({users: res.value.data}));
this.props.getPosts().then(res=> this.setState({posts: res.value.data}));
}

render() {
      console.log(this.state)
return (
      <div> Dashboard<br/>
      <Post users={this.state.users} posts={this.state.posts}/>
      </div>
       )

 }
}

const mapStateToProps = (state) => ({
      ...state
})
export default connect(mapStateToProps, {getUsers, getPosts})(Dashboard);