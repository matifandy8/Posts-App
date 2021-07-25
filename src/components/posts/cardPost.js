import React from "react";
import "./cardPost.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { deletePost,detailPost } from "../../redux/actions/postsActions"
import swal from 'sweetalert';



function CardPost({ post }) {
 const dispatch=useDispatch()

	const deleteClicked = (id) => {
		dispatch(deletePost(id))
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! post has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary post is safe!");
      }
    });
	}

	const editClicked = (id) => {
		dispatch(detailPost(id))
	}

  return (
    <>
        <div className="card m-3 border border-info" key={post.id}>
          <div className="card-body">
            <span className="title m-5">post{post.title}</span>
            <Link className="btn btn-info details" to={`/details/${post.id}`}>
            Details
              </Link>

            <Link className="btn btn-info" to={`/update/${post.id}`} onClick={()=>{editClicked(post.id)}}>
              Update{" "}
            </Link>
            <button
              className="btn btn-danger"
               onClick={() => { deleteClicked(post.id)}}
            >
              Delete
            </button>
          </div>
        </div>
    </>
  );
}

export default CardPost;
