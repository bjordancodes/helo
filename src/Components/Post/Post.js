import React, {Component} from 'react';
import axios from 'axios';


class Post extends Component {
      constructor(){
            super();
            this.state = {
            id: 3,
            text: '',
            editing: false,
            }
      }

handleChange = (e) => {
      this.setState({text: e.target.value})
      }

mapOverPosts = () => this.props.posts.map((e, i) =>{
      console.log('my post content', e.username)
      return (<div style={{border: '1px solid purple', margin: '10px auto', width: '80vw'}}>
            <h2>{e.title}</h2>
            <p>{e.username} says....</p>
            <p>{this.state.editing ? <input id={e.id} value={e.content && this.state.text} onChange={this.handleChange}
            onKeyPress={this.editPost}/>: <span>{e.content}</span>}</p>
            <button onClick={()=> this.setState({editing: !this.state.editing})}>Edit</button>
            <button onClick={this.editPost}>Update</button>
      </div>)
})

editPost = () => {
      axios.put(`/post/?id=${this.state.id}`, {post: this.state.post} )
      .then(res => alert('post updated!'))
      .catch(err=> console.log(err))
      this.setState({edit: false})
}




render() {
console.log('hello it me your props: ', this.state)
const myPosts = this.mapOverPosts();
return (
      <div>{myPosts}</div>
       )
}
}
export default Post;