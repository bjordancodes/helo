import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers, getPosts} from '../../dux/reducer';

class Dashboard extends Component {

componentDidMount(){
this.props.getUsers();
this.props.getPosts();
}

render() {

return (
      <div> Dashboard </div>
       )

 }
}

const mapStateToProps = (state) => ({
      ...state
})
export default connect(mapStateToProps, {getUsers, getPosts})(Dashboard);