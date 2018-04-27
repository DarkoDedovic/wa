import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Footer } from '../partials/Footer';
import { Header } from '../partials/Header';

import { SinglePostPage } from '../SinglePostPage';
import { PostsPage } from '../PostsPage';
import { Authors } from '../Authors';
import { Author } from '../Author';
import { InfoAuthor } from '../InfoAuthor';
import { AboutPage } from '../AboutPage';



const App = () => {

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/posts" component={PostsPage} />
        <Route path="/post/:postId" component={SinglePostPage} />
        <Route exact path="/authors" component={Authors} />
        <Route path="/authors/:authorId" component={InfoAuthor} />

        <Route exact path="/aboutPage" component={AboutPage} />
        <Redirect from='/' to='/posts' />
      </Switch>
      <Footer />

    </div>
  )
}




export { App };
