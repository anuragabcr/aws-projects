import React, { useState, useEffect } from "react";
import {  HashRouter,  Switch,  Route} from "react-router-dom";
//AWS AppSync - GraphQL
import { generateClient } from 'aws-amplify/api';
import { listPosts } from "./graphql/queries";
//AWS Cognito
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { css } from '@emotion/css';
import './App.css';
import Posts from './Posts';
import Post from './Post';
import Header from './Header';
import CreatePost from './CreatePost';
import Button from './Button';

const client = generateClient();

function Router({ signOut, user }) {
  const [showOverlay, updateOverlayVisibility] = useState(false);
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const postData = await client.graphql({ query: listPosts, variables: { limit: 100 } });
      let postsArray = postData.data.listPosts.items;
      postsArray = await Promise.all(postsArray.map(async post => {
        post.image = "https://postagram676193f4717a418cac8c5c6469febb5d23010-dev.s3.ap-south-1.amazonaws.com/public/"+post.image.split(" ").join("+")
        return post;
      }));
      updatePosts(postsArray);
    } catch (err) {
      console.log({ err });
    }
  }

  // async function setPostState(postsArray) {
  //   updatePosts(postsArray);
  // }

  return (
    <>
      <HashRouter>
          <div className={contentStyle}>
            <Header />
            <hr className={dividerStyle} />
            <Button title="New Post" onClick={() => updateOverlayVisibility(true)} />
            <Switch>
              <Route exact path="/" >
                <Posts posts={posts} />
              </Route>
              <Route path="/post/:id" >
                <Post />
              </Route>
            </Switch>
          </div>
          <button onClick={signOut}>Sign out</button>
        </HashRouter>
        { showOverlay && (
          <CreatePost
            updateOverlayVisibility={updateOverlayVisibility}
            updatePosts={updatePosts}
            posts={posts}
          />
        )}
    </>
  );
}

const dividerStyle = css`
  margin-top: 15px;
`

const contentStyle = css`
  min-height: calc(100vh - 45px);
  padding: 0px 40px;
`

export default withAuthenticator(Router);