import React, { useEffect} from "react";
import CardPost from "./cardPost";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import { getPosts } from "../../redux/actions/postsActions";


function ListPosts() {
  const dispatch = useDispatch();
	const postsList = useSelector((state) => state.postList);
	const { loading, posts, error } = postsList;

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

  return (
    <div className="home border-top">
      <h1  className="jumbotron text-center p-3 p-md-3"></h1>
      <div className="posts">
         {loading && <Loading/>}
        {/* {JSON.stringify(posts.length)} */}
        {posts.map((post) => (
          <div key={post.id}>
            <CardPost key={post.id} post={post} />
          </div>
        ))} 
      </div>
    </div>
  );
}

export default ListPosts;