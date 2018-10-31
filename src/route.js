import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Post from './Components/Post/Post';
import Form from './Components/Form/Form';
import SpecificPost from './Components/Post/specificPost';

export default (
    <Switch>
        <Route exact path='/' render={props => {console.log(props.location); return <Auth {...props} location={props.location}/>}}/>
        <Route path="/dashboard" render={props => <Dashboard {...props}/>}/>
        <Route path="/post/:postid" render={props=> <SpecificPost {...props}/>}/>
        <Route path="/new" component={Form}/>
    </Switch>
)