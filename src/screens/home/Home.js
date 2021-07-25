import React from "react";
import ListPosts from "../../components/posts/listPosts";
import CreatePost from "../../components/createpost/CreatePost";



function Home() {
  return (
    <div className="home">
      <CreatePost />
       <ListPosts/>
    </div>
  );
}

export default Home;