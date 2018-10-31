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

      componentDidMount() {
            // if (this.props.match.params.postid)
            // axios.post('/post', {postid: this.props.match.params.postid})
            // .then(response => this.setState({certainPost: response.data}))
            // .catch(err => console.log(err));
      }

handleChange = (e) => {
      this.setState({text: e.target.value})
      }
ID = 1;

newId = () => {
      return this.ID++;
}

mapOverPosts = () => this.props.posts.map((e, i) =>{
      console.log('my post content', e.username)
      return (<div key={this.newId()} style={{border: '1px solid purple', margin: '10px auto', width: '80vw'}}>
            <h2>{e.title}</h2>
            <p>{e.username} says....</p>
            <p>{this.state.editing ? <input id={e.id} value={this.state.text} onChange={this.handleChange}/>: <span>{e.content}</span>}</p>
            <button onClick={()=> this.setState({editing: !this.state.editing})}>Edit</button>
            <button onClick={this.editPost}>Update</button>
      </div>)
})

editPost = () => {
      axios.put(`/post?id=${this.state.id}`, {post: this.state.text} )
      .then(res => alert('post updated!'))
      .catch(err=> console.log(err))
      this.setState({editing: false})
}

render() {
console.log('hello it me your post: ', this.props, this.state)
// if (this.state.certainPost) {
// setTimeout(()=> myPosts = this.mapOverPosts(this.state.certainPost), 2000)
// } else {
const myPosts = this.mapOverPosts(this.props.posts)
// }
return (
      <div>
      {myPosts}
      </div>
       )
}
}
export default Post;