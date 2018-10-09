import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Post from './Components/Post/Post';
import Form from './Components/Form/Form';

export default (
    <Switch>
        <Route exact path='/' render={props => {console.log(props.location); return <Auth {...props} location={props.location}/>}}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/post/:postid" render={props=> <Post {...props}/>}/>
        <Route path="/new" component={Form}/>
    </Switch>
)