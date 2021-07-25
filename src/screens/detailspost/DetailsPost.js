import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailPost } from "../../redux/actions/postsActions"

function DetailsPost() {
  const [found, setFound] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

	const postDetails = useSelector((state) => state.postDetail);
	const { post, loading, error } = postDetails;

	useEffect(() => {
		dispatch(detailPost(parseInt(id)));
	}, [dispatch,id]);


  if (found) {
    return (
      <div className="not-found-container">
        <h1 className="not-found-title">Not found</h1>
      </div>
    );
  } else {
    return (
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <div className="caption">
          <h3 className="md-heading">
            <h3>{post.title}</h3>
          </h3>
          <p>{post.body} </p>
        </div>
      </div>
    );
  }
}

export default DetailsPost;
