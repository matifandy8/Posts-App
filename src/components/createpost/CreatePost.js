import React from "react";
import { Formik } from "formik";
import "./CreatePost.css"
import { useDispatch, useSelector } from "react-redux";
import { createPost } from  "../../redux/actions/postsActions";
import swal from 'sweetalert';



function CreatePost() {
  const dispatch = useDispatch();
  const createdPost = useSelector((state) => state.postCreated);
	const { post, loading, error } = createdPost;

  const initialValues = {
    title: "",
    body: "",
  };

 
  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = "Title is required";
    } else if (values.title.length < 4) {
      errors.title = "Title too short";
    }

    if (!values.body) {
      errors.body = "Body is required";
    } else if (values.body.length < 6) {
      errors.body = "Body too short";
    }

    return errors;
  };
  const submitForm = (values) => {
    dispatch(createPost(values.title, values.body));
    swal(`New Post:  Title:${values.title},    
    Body:${values.body}`);

  };
   

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
          } = formik;
          return (
            <div className="container ">
              <div className="row justify-content-center createpost">
                <div className="col-md-6 ">
                <h2>Create post</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Write the title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.title && touched.title ? "input-error" : null
                        }
                      />
                      {errors.title && touched.title && (
                        <span className="error text-danger">
                          {errors.title}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="body"
                        id="body"
                        placeholder="Write the body"
                        value={values.body}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.body && touched.body
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.body && touched.body && (
                        <span className="error text-danger">
                          {errors.body}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btncreate btn btn-info">
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default CreatePost;