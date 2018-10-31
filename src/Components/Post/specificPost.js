import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, getPosts} from '../../dux/reducer';
import Post from '../Post/Post';
import axios from 'axios';


class SpecificPost extends Component {

componentDidMount(){
        this.props.getUsers().then(res=> console.log(res.value.data) || this.setState({users: res.value.data}));
        this.props.getPosts().then(res=> this.setState({posts: res.value.data}));
        }


sessionUpdate = () => {
     axios.get('/posts')
            .then(res => res)
            .catch(err=> console.log(err))
      }
render() {


return (
      <div><h1>
      {this.props.match.params.postid}
      </h1>
      <button onClick={this.sessionUpdate}>update session</button>
      </div>
       )

 }
}
const mapStateToProps = (state) => ({
    ...state
})
export default connect(mapStateToProps, {getUsers, getPosts})(SpecificPost);