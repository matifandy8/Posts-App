import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdatePost.css";
import { useDispatch,useSelector } from "react-redux"
import { updatePost } from "../../redux/actions/postsActions"
import { detailPost } from "../../redux/actions/postsActions"
import swal from 'sweetalert';


function UpdatePost() {
 const dispatch = useDispatch()
 const postDetails = useSelector((state) => state.postDetail);
	const { post, loading, error } = postDetails;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [found, setFound] = useState(false);
  const { id } = useParams();


  
	useEffect(() => {
		dispatch(detailPost(parseInt(id)));
	}, [dispatch,id]);

 

  	const updateClicked =  (e) => {
      e.preventDefault();
		dispatch(updatePost(id,title,body))
    swal({
      title: "Are you sure?",
      text: "Once updated, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been updated!", {
          icon: "success",
          text: `Updated Post:  Title:${title},    
          Body:${body}`,
        });
      } else {
        swal("Your post is safe!");
      }
    });
	}

  if (found) {
    return (
      <div className="not-found-container">
        <h1 className="not-found-title">Not found</h1>
      </div>
    );
  } else {
    return (
      <div className="col-md-5 p-lg-5 mx-auto my-5">
      <form onSubmit={(e) => updateClicked(e)} action="">
        <div className="edit-container">
          <h2>Title</h2>
          <textarea
            className="textarea"
            required
            defaultValue={post.title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <h2>Body</h2>
          <textarea
            className="textarea"
            required
            defaultValue={post.body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <button className="edit-button btn btn-info">Update</button>
        </div>
      </form>
      </div>

    );
  }
}

export default UpdatePost;