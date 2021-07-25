import axios from "axios";
import {
	GET_POSTS,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL,
	CREATE_POST,
	CREATE_POST_SUCCESS,
	CREATE_POST_FAIL,
	DELETE_POST,
	DELETE_POST_SUCCESS,
	DELETE_POST_FAIL,
	DETAIL_POST,
	DETAIL_POST_SUCCESS,
	DETAIL_POST_FAIL,
	UPDATE_POST,
	UPDATE_POST_SUCCESS,
	UPDATE_POST_FAIL,
} from "../constants/postConstants";

export const getPosts = () => async (dispatch) => {
	try {
		dispatch({ type: GET_POSTS });

		const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

		dispatch({
			type: GET_POSTS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_POSTS_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const createPost = (title, body) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_POST });

		const { data } = await axios.post("https://jsonplaceholder.typicode.com/posts", { title: title, body: body });

		dispatch({
			type: CREATE_POST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CREATE_POST_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_POST });

		const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

		dispatch({
			type: DELETE_POST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: DELETE_POST_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const detailPost = (id) => async (dispatch) => {
	try {
		dispatch({ type: DETAIL_POST });
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

		dispatch({
			type: DETAIL_POST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: DETAIL_POST_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const updatePost = (id, title, body) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_POST });
		const { data } = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			title: title,
			body: body,
		});

		dispatch({
			type: UPDATE_POST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_POST_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};